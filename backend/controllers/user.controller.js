import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;

        console.log(fullName, email, phoneNumber, password, role);
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something are missing",
                success: false
            });
        };
        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).json({
                message: "user already exist with this email",
                success: false,
            })
        };

        let profilePhotoUrl = "https://res.cloudinary.com/dz1qj3x8h/image/upload/v1735681234/default-profile-picture.png";

        if (req.file) {
            profilePhotoUrl = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { resource_type: "image" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result.secure_url);
                    }
                );
                stream.end(req.file.buffer);
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: {
                profilePhoto: profilePhotoUrl,
            }
        })
        return res.status(201).json({
            message: "Account created successfully",
            success: true,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

//login
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "something is missing",
                success: false,
            })
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "inncorrect email or password",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false,
            })
        }
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role",
                success: false,
            })
        };

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })
        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `welcome back ${user.fullName}`,
            user,
            success: true,
        })


    } catch (error) {
        console.log(error)

    }
};
//logout
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully",
            success: true,
        })

    } catch (error) {
        console.log(error)
    }
};
//update profile
export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body;
        let skillsArray;
        if (skills) {
            skillsArray = skills.split(" , ");
        }


        const userId = req.id;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message: "user not found",
                success: false,
            })
        }
        if (fullName) user.fullName = fullName
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skillsArray

        await user.save();

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "profile update succesfully",
            user,
            success: true,
        })

    } catch (error) {
        console.log(error)
    }
}

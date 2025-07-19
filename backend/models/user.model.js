import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter',],
        required: true,
    },
    profile: {
        bio: { type: String },
        skills: { type: Array },
        resume: { type: String },
        experience: { type: Array },
        projects: { type: Array },
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: {
            type: String,
            default: "https://res.cloudinary.com/dz1qj3x8h/image/upload/v1735681234/default-profile-picture.png",
        },
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);


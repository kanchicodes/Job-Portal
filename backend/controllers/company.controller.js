import { Company } from "../models/company.model.js";

export const resisterCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false,
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: " You can't register same company ",
                success: false,
            });
        }
        company = await Company.create({ name: companyName });
        return res.status(201).json({
            message: "Company registered successfully",
            company,
            success: true,
        });
    } catch (error) {
        console.error(error);
    }
};

export const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({});
        if (!companies || companies.length === 0) {
            return res.status(404).json({
                message: " company not found",
                success: false,
            });
        }
        return res.status(200).json({
            companies,
            success: true,
        });
    } catch (error) {
        console.error(error);
    }
};

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            company,
            success: true,
        });
    } catch (error) {
        console.error(error);
    }
};

export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;

        const updatedData = { name, description, website, location };
        const company = await Company.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.error(error);
    }
}
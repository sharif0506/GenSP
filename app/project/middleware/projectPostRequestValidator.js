import Joi from "joi";
import mongoose from "mongoose";


const isValidObjectId = (value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.error("any.invalid");
    }
    return value;
};

// Define Joi validation schema
const projectSchema = Joi.object({
    name: Joi.string().trim().min(3).max(100).required().messages({
        "string.empty": "Project name is required.",
        "string.min": "Project name must be at least 3 characters long.",
        "string.max": "Project name cannot exceed 100 characters.",
    }),
    description: Joi.string().trim().min(10).max(500).required().messages({
        "string.empty": "Project description is required.",
        "string.min": "Project description must be at least 10 characters long.",
        "string.max": "Project description cannot exceed 500 characters.",
    }),
    owner: Joi.string().custom(isValidObjectId).required().messages({
        "any.invalid": "Owner ID must be a valid MongoDB ObjectId.",
        "string.empty": "Owner ID is required.",
    }),
    teamMembers: Joi.array().items(Joi.string().custom(isValidObjectId)).messages({
        "any.invalid": "Each team member ID must be a valid MongoDB ObjectId.",
    }),
});

// Middleware function
export const validateProjectPostRequest = (req, res, next) => {

    console.log("here it is");
    const { error } = projectSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({ errors: error.details.map((err) => err.message) });
    }

    next(); // Proceed if validation passes
};

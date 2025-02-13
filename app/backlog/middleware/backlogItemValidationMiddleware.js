import Joi from "joi";

const backlogItemSchema = Joi.object({
    type: Joi.string()
        .valid("epic", "story", "task", "issue")
        .required(),

    title: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters long",
            "string.max": "Title must be less than 100 characters"
        }),

    description: Joi.string()
        .min(10)
        .max(500)
        .required()
        .messages({
            "string.empty": "Description is required",
            "string.min": "Description must be at least 10 characters long",
            "string.max": "Description must be less than 500 characters"
        }),

    priority: Joi.string()
        .valid("Low", "Medium", "High")
        .default("Medium"),

    status: Joi.string()
        .valid("To Do", "In Progress", "Done")
        .default("To Do"),

    project: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.pattern.base": "Invalid project ID format"
        }),

    assignedTo: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .allow(null, ""), // Optional field

    sprint: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .allow(null, ""), // Optional field
});

// Middleware function for validation
const validateBacklogItem = (req, res, next) => {
    const { error } = backlogItemSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            message: "Validation Error",
            errors: error.details.map(err => err.message),
        });
    }

    next();
};

export default validateBacklogItem;

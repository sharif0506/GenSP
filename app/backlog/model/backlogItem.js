import mongoose from "mongoose";

const backlogItemSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["epic", "story", "task", "issue"],
            required: true,
            default: "story",
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },
        status: {
            type: String,
            enum: ["To Do", "In Progress", "Done"],
            default: "To Do",
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project", // Reference to the Project model
            required: true,  // Ensure every backlog item belongs to a project
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
        },
        sprint: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sprint", // Reference to the Sprint model (if assigned to a sprint)
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const BacklogItem = mongoose.model("backlogItem", backlogItemSchema);

export default BacklogItem;

import mongoose from "mongoose";

const subtaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        status: {
            type: String,
            enum: ["To Do", "In Progress", "Done"],
            default: "To Do",
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId, // Store the MongoDB ID of the user
            ref: "User", // Reference to the User model
        },
        dueDate: {
            type: Date,
        },
        backlogItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BacklogItem", // Reference to the BacklogItem model
            required: true,
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
);

const Subtask = mongoose.model("Subtask", subtaskSchema);

export default Subtask;

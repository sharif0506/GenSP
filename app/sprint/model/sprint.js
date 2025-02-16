import mongoose from "mongoose";

const sprintSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        goal: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        backlogItems: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "BacklogItem", // Reference to the BacklogItem model
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Sprint = mongoose.model("Sprint", sprintSchema);

export default Sprint;

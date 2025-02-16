import {
    getAllSprints,
    getSprintById,
    createSprint,
    updateSprint,
    deleteSprint,
} from "../service/sprintService.js";
import validator from "validator";

const handleGetSprints = async (req, res) => {
    try {
        const sprints = await getAllSprints();
        return res.status(200).json({
            success: true,
            message: "Sprints retrieved successfully",
            data: sprints,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const handleGetSprintById = async (req, res) => {
    const { sprintId } = req.params;

    // Validate sprintId format
    if (!validator.isMongoId(sprintId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Sprint ID format",
        });
    }

    try {
        const sprint = await getSprintById(sprintId);

        if (!sprint) {
            return res.status(404).json({
                success: false,
                message: "Sprint not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Sprint retrieved successfully",
            data: sprint,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const handleCreateSprint = async (req, res) => {
    const { name, goal, capacity, startDate, endDate, backlogItems } = req.body;

    // Validate required fields
    if (!name || !goal || !capacity || !startDate || !endDate) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields: name, goal, capacity, startDate, or endDate",
        });
    }

    try {
        const sprintObject = { name, goal, capacity, startDate, endDate, backlogItems };
        const sprint = await createSprint(sprintObject);

        return res.status(201).json({
            success: true,
            message: "Sprint created successfully",
            data: sprint,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const handleUpdateSprint = async (req, res) => {
    const { sprintId } = req.params;

    // Validate sprintId format
    if (!validator.isMongoId(sprintId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Sprint ID format",
        });
    }

    const sprintUpdates = req.body;

    try {
        const updatedSprint = await updateSprint(sprintId, sprintUpdates);

        if (!updatedSprint) {
            return res.status(404).json({
                success: false,
                message: "Sprint not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Sprint updated successfully",
            data: updatedSprint,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const handleDeleteSprint = async (req, res) => {
    const { sprintId } = req.params;

    // Validate sprintId format
    if (!validator.isMongoId(sprintId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Sprint ID format",
        });
    }

    try {
        const deletedSprint = await deleteSprint(sprintId);

        if (!deletedSprint) {
            return res.status(404).json({
                success: false,
                message: "Sprint not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Sprint deleted successfully",
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export {
    handleGetSprints,
    handleGetSprintById,
    handleCreateSprint,
    handleUpdateSprint,
    handleDeleteSprint,
};

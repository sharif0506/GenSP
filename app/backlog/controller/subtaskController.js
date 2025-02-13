import {getAllSubtasks, getSubtaskById, createSubtask, updateSubtask, deleteSubtask} from "../service/subtaskService.js";
import validator from "validator";


const handleGetSubtasks = async (req, res) => {
    try {
        const subtasks = await getAllSubtasks();
        return res.status(200).send(subtasks);
    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"});
    }
};

const handleGetSubtaskById = async (req, res) => {

    try {
        const {subtaskId} = req.params;

        if (!/^[0-9a-fA-F]{24}$/.test(subtaskId)) {
            return res.status(400).send({message: 'Invalid ID format'});
        }

        const subtask = await getSubtaskById(subtaskId);

        if (!subtask) return res.status(404).send({message: 'Subtask Not Found'});
        return res.status(200).send(subtask);

    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"});
    }
};


// Create a new Subtask 
const handleCreateSubtask = async (req, res) => {

    const subtaskObject = req.body;

    try {
        const subtask = await createSubtask(subtaskObject);
        return res.status(201).send(subtask);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: "Internal Server Error"});
    }

};

const handleUpdateSubtask = async (req, res) => {

    const {subtaskId} = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(subtaskId)) {
        return res.status(400).send({message: 'Invalid ID format'});
    }

    const subtaskObject = req.body;

    try {
        const subtask = await updateSubtask(subtaskId, subtaskObject);
        return res.status(200).send(subtask);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: "Internal Server Error"});
    }

}

const handleDeleteSubtask = async (req, res) => {
    const {subtaskId} = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(subtaskId)) {
        return res.status(400).send({message: 'Invalid ID format'});
    }

    try {
        const subtask = await deleteSubtask(subtaskId);
        res.status(200).json({message: "Subtask deleted successfully"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: "Internal Server Error"});
    }
}


export {handleGetSubtasks, handleGetSubtaskById, handleCreateSubtask, handleUpdateSubtask, handleDeleteSubtask};
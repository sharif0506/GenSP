import express from "express";
import {handleGetSubtasks, handleGetSubtaskById, handleCreateSubtask, handleUpdateSubtask, handleDeleteSubtask} from "../controller/subtaskController.js";


let subtaskRouter = express.Router();

subtaskRouter.get("/", (req, res) => {
    return handleGetSubtasks(req, res);
});

subtaskRouter.get("/:subtaskId", (req, res) => {
    return handleGetSubtaskById(req, res);
});

subtaskRouter.post("/", (req, res) => {
    return handleCreateSubtask(req, res);
});


subtaskRouter.put("/:subtaskId", (req, res) => {
    return handleUpdateSubtask(req, res);
});


subtaskRouter.delete("/:subtaskId", (req, res) => {
    return handleDeleteSubtask(req, res);
});

export default subtaskRouter;



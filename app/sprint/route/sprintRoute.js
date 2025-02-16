import express from "express";
import {handleGetSprints, handleGetSprintById, handleCreateSprint, handleUpdateSprint, handleDeleteSprint} from "../controller/sprintController.js";


let sprintRouter = express.Router();

sprintRouter.get("/", (req, res) => {
    return handleGetSprints(req, res);
});

sprintRouter.get("/:sprintId", (req, res) => {
    return handleGetSprintById(req, res);
});

sprintRouter.post("/", (req, res) => {
    return handleCreateSprint(req, res);
});


sprintRouter.put("/:sprintId", (req, res) => {
    return handleUpdateSprint(req, res);
});


sprintRouter.delete("/:sprintId", (req, res) => {
    return handleDeleteSprint(req, res);
});

export default sprintRouter;



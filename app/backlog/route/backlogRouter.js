import express from "express";
import {handleGetBacklogs, handleGetBacklogById, handleCreateBacklog, handleUpdateBacklog, handleDeleteBacklog} from "../controller/backlogController.js";
import validateBacklogItem from "../middleware/backlogItemValidationMiddleware.js";


let backlogRouter = express.Router();

backlogRouter.get("/", validateBacklogItem, (req, res) => {
    return handleGetBacklogs(req, res);
});

backlogRouter.get("/:backlogId", validateBacklogItem, (req, res) => {
    return handleGetBacklogById(req, res);
});

backlogRouter.post("/", validateBacklogItem, (req, res) => {
    return handleCreateBacklog(req, res);
});


backlogRouter.put("/:backlogId", validateBacklogItem, (req, res) => {
    return handleUpdateBacklog(req, res);
});


backlogRouter.delete("/:backlogId", (req, res) => {
    return handleDeleteBacklog(req, res);
});

export default backlogRouter;



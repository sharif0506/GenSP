import express from "express";
import {
    handleGetProjects,
    handleGetProjectById,
    handleCreateProject,
    handleUpdateProject,
    handleDeleteProject,
} from "../controller/projectController.js";
import {validateProjectPostRequest} from "../middleware/projectPostRequestValidator.js";


const projectRouter = express.Router();

projectRouter.get("/", async (req, res) => {
    return await handleGetProjects(req, res);
});

projectRouter.get("/:projectId", async (req, res) => {
    return await handleGetProjectById(req, res);
});

projectRouter.post("/", validateProjectPostRequest, async (req, res) => {
    return await handleCreateProject(req, res);
});

projectRouter.put("/:projectId", async (req, res) => {
    return await handleUpdateProject(req, res);
});

projectRouter.delete("/:projectId", async (req, res) => {
    return await handleDeleteProject(req, res);
});

export default projectRouter;

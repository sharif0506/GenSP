import {
    fetchAllProjects,
    fetchProjectById,
    addNewProject,
    modifyProject,
    removeProject,
} from "../service/projectService.js";


const handleGetProjects = async (req, res) => {
    try {
        const projects = await fetchAllProjects();
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};

const handleGetProjectById = async (req, res) => {
    try {
        const {projectId} = req.params;
        if (!/^[0-9a-fA-F]{24}$/.test(projectId)) {
            return res.status(400).json({message: "Invalid ID format"});
        }

        const project = await fetchProjectById(projectId);
        if (!project) {
            return res.status(404).json({message: "Project Not Found"});
        }
        return res.status(200).json(project);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};

const handleCreateProject = async (req, res) => {
    try {
        const projectData = req.body;


        const project = await addNewProject(projectData);
        return res.status(201).json(project);
    } catch (error) {

        console.log(error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

const handleUpdateProject = async (req, res) => {
    try {
        const {projectId} = req.params;
        if (!/^[0-9a-fA-F]{24}$/.test(projectId)) {
            return res.status(400).json({message: "Invalid ID format"});
        }

        const projectData = req.body;
        const project = await modifyProject(projectId, projectData);
        return res.status(200).json(project);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};

const handleDeleteProject = async (req, res) => {
    try {
        const {projectId} = req.params;
        if (!/^[0-9a-fA-F]{24}$/.test(projectId)) {
            return res.status(400).json({message: "Invalid ID format"});
        }

        await removeProject(projectId);
        return res.status(200).json({message: "Project deleted successfully"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};


export {handleGetProjects, handleGetProjectById, handleCreateProject, handleUpdateProject, handleDeleteProject};
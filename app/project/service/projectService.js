import {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} from "../repository/projectRepository.js";


export const fetchAllProjects = async () => {
    return await getAllProjects();
};

export const fetchProjectById = async (projectId) => {
    return await getProjectById(projectId);
};

export const addNewProject = async (projectData) => {
    return await createProject(projectData);
};

export const modifyProject = async (projectId, projectData) => {
    return await updateProject(projectId, projectData);
};

export const removeProject = async (projectId) => {
    return await deleteProject(projectId);
};


export default {fetchAllProjects, fetchProjectById, addNewProject, modifyProject, removeProject};
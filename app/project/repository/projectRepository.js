import Project from "../model/project.js";

export const getAllProjects = async () => {
    return await Project.find({}).exec();
};

export const getProjectById = async (projectId) => {
    return await Project.findById(projectId).exec();
};

export const createProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

export const updateProject = async (projectId, projectData) => {
    return await Project.findByIdAndUpdate(
        projectId,
        {$set: projectData},
        {new: true, runValidators: true}
    ).exec();
};

export const deleteProject = async (projectId) => {
    return await Project.findByIdAndDelete(projectId).exec();
};


export default {getAllProjects, getProjectById, createProject, updateProject, deleteProject};
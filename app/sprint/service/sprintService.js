import {findAll, findById, create, update, remove} from "../repository/sprintRepository.js";

const getAllSprints = async () => {
    return await findAll();
}

const getSprintById = async (sprintId) => {
    return await findById(sprintId);
}

const createSprint = async (sprintObject) => {
    return await create(sprintObject);
}

const updateSprint = async (sprintId, sprintObject) => {
    return await update(sprintId, sprintObject);
}

const deleteSprint = async (sprintId) => {
    return await remove(sprintId);
}


export {getAllSprints, getSprintById, createSprint, updateSprint, deleteSprint};

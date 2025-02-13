import {findAll, findById, create, update, remove} from "../repository/backlogRepository.js";

const getAllBacklogs = async () => {
    return await findAll();
}

const getBacklogById = async (backlogId) => {
    return await findById(backlogId);
}

const createBacklog = async (backlogObject) => {
    return await create(backlogObject);
}

const updateBacklog = async (backlogId, backlogObject) => {
    return await update(backlogId, backlogObject);
}

const deleteBacklog = async (backlogId) => {
    return await remove(backlogId);
}


export {getAllBacklogs, getBacklogById, createBacklog, updateBacklog, deleteBacklog};

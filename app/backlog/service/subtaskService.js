import {findAll, findById, create, update, remove} from "../repository/subtaskRepository.js";

const getAllSubtasks = async () => {
    return await findAll();
}

const getSubtaskById = async (subtaskId) => {
    return await findById(subtaskId);
}

const createSubtask = async (subtaskObject) => {
    return await create(subtaskObject);
}

const updateSubtask = async (subtaskId, subtaskObject) => {
    return await update(subtaskId, subtaskObject);
}

const deleteSubtask = async (subtaskId) => {
    return await remove(subtaskId);
}


export {getAllSubtasks, getSubtaskById, createSubtask, updateSubtask, deleteSubtask};

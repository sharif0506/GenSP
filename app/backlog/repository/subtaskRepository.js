import Subtask from '../model/subtask.js';


const findAll = async () => {
    return await Subtask.find({}).exec();
};

const findById = async (subtaskId) => {
    return await Subtask.findById(subtaskId).exec();
}

const create = async (subtaskObject) => {
    const subtaskModel = new Subtask(subtaskObject);
    return await subtaskModel.save();
}

const update = async (subtaskId, subtaskObject) => {
    return await Subtask.findOneAndUpdate(
        {_id: subtaskId},
        subtaskObject,
        {new: true, runValidators: true}
    ).exec();
}

const remove = async (subtaskId) => {
    return await Subtask.findByIdAndDelete(subtaskId).exec();
}

export {findAll, findById, create, update, remove};
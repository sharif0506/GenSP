import Sprint from "../model/sprint.js";


const findAll = async () => {
    return await Sprint.find({}).exec();
};

const findById = async (sprintId) => {
    return await Sprint.findById(sprintId).exec();
}

const create = async (sprintObject) => {
    const sprintModel = new Sprint(sprintObject);
    return await sprintModel.save();
}

const update = async (sprintId, sprintObject) => {
    return await Sprint.findOneAndUpdate(
        {_id: sprintId},
        sprintObject,
        {new: true, runValidators: true}
    ).exec();
}

const remove = async (sprintId) => {
    return await Sprint.findByIdAndDelete(sprintId).exec();
}

export {findAll, findById, create, update, remove};
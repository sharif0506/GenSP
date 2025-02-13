import BacklogItem from '../model/backlogItem.js';


const findAll = async () => {
    return await BacklogItem.find({}).exec();
};

const findById = async (backlogId) => {
    return await BacklogItem.findById(backlogId).exec();
}

const create = async (backlogObject) => {
    const backlogModel = new BacklogItem(backlogObject);
    return await backlogModel.save();
}

const update = async (backlogId, backlogObject) => {
    return await BacklogItem.findOneAndUpdate(
        {_id: backlogId},
        backlogObject,
        {new: true, runValidators: true}
    ).exec();
}

const remove = async (backlogId) => {
    return await BacklogItem.findByIdAndDelete(backlogId).exec();
}

export {findAll, findById, create, update, remove};
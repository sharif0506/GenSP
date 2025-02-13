import {getAllBacklogs, getBacklogById, createBacklog, updateBacklog, deleteBacklog} from "../service/backlogService.js";



const handleGetBacklogs = async (req, res) => {
    try {
        const backlogs = await getAllBacklogs();
        return res.status(200).send(backlogs);
    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"});
    }
};

const handleGetBacklogById = async (req, res) => {

    try {
        const {backlogId} = req.params;

        if (!/^[0-9a-fA-F]{24}$/.test(backlogId)) {
            return res.status(400).send({message: 'Invalid ID format'});
        }

        const backlog = await getBacklogById(backlogId);

        if (!backlog) return res.status(404).send({message: 'Backlog item Not Found'});
        return res.status(200).send(backlog);

    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"});
    }
};


// Create a new Backlog item
const handleCreateBacklog = async (req, res) => {

    const backlogObject = req.body;

    try {
        const backlog = await createBacklog(backlogObject);
        return res.status(201).send(backlog);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: "Internal Server Error"});
    }

};

const handleUpdateBacklog = async (req, res) => {

    const {backlogId} = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(backlogId)) {
        return res.status(400).send({message: 'Invalid ID format'});
    }

    const backlogObject = req.body;

    try {
        const backlog = await updateBacklog(backlogId, backlogObject);
        return res.status(200).send(backlog);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: "Internal Server Error"});
    }

}

const handleDeleteBacklog = async (req, res) => {
    const {backlogId} = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(backlogId)) {
        return res.status(400).send({message: 'Invalid ID format'});
    }

    try {
        const backlog = await deleteBacklog(backlogId);
        res.status(200).json({message: "Backlog deleted successfully"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: "Internal Server Error"});
    }
}


export {handleGetBacklogs, handleGetBacklogById, handleCreateBacklog, handleUpdateBacklog, handleDeleteBacklog};
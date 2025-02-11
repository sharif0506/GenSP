import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import projectRouter from "./app/project/route/projectRouter.js";
import backlogRouter from "./app/backlog/route/backlogRouter.js";
import subtaskRouter from "./app/backlog/route/subtaskRouter.js";
import sprintRouter from "./app/sprint/route/sprintRoute.js";
import userRouter from "./app/user/route/userRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
try {
    const mongoDbUrl = process.env.MONGODB_URL;
    console.log(mongoDbUrl, typeof mongoDbUrl);
    await mongoose.connect(mongoDbUrl);
} catch (exception) {
    console.log(exception)
}

app.use('/api/projects', projectRouter);
app.use('/api/backlogs', backlogRouter);
app.use('/api/subtasks', subtaskRouter);
app.use('/api/sprints', sprintRouter);
app.use('/api/users', userRouter);

export default app;
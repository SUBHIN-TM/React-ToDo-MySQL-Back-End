import { response } from "express";
import Task from "../Models/Task.js";
const addTask= async (req,res)=>{
    try {

        console.log("Task add section");
        // console.log(req.body);
        const {newCat,newDate,newTitle,newDesc} =req.body
        const task=await Task.create({
            title:newTitle,
            description:newDesc,
            due_date:newDate,
            user_id:req.token.id,
            category_id:newCat
        })
        console.log(task.dataValues);
        return res.status(200).json({message:'Task successfully added'})     
    } catch (error) {
        console.error(error);
    }
}


const deleteTask = async (req, res) => {
    try {
        // console.log(req.body);
        const taskId = req.body.id;
        const userId = req.token.id;
        const response = await Task.destroy({ where: { user_id: userId, id: taskId } });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateTask = async (req, res) => {
    try {
        console.log("Updating section");
        // console.log(req.body);
        const taskId = req.body.taskId;
        const userId = req.token.id;
        // console.log(taskId, userId);
        const response = await Task.update(req.body.editedTask, { where: { user_id: userId, id: taskId } });
        console.log(response);
        res.status(200).json({ message: 'Updated Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export{addTask,deleteTask,updateTask}
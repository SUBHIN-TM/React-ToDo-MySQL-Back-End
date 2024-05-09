import express from 'express';
const router =express.Router();
import { login,signUp } from '../Controllers/auth.js';
import verifyToken from '../Middlewares/jwt.js';
import {dashboard,dashboardGet} from '../Controllers/dashboard.js';
import { addTask,deleteTask,updateTask} from '../Controllers/task.js';

router.get('/',(req,res)=>{
    console.log("home page");
    res.send("welcome")
})
router.post('/login',login);
router.post('/signUp',signUp);
router.post('/dashboard',verifyToken,dashboard);
router.get('/dashboardGet',verifyToken,dashboardGet);
router.post('/addTask',verifyToken,addTask);
router.post('/deleteTask',verifyToken,deleteTask);
router.post('/updateTask',verifyToken,updateTask);










export default router;
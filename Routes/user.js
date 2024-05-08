import express from 'express';
const router =express.Router();
import { login,signUp } from '../Controllers/auth.js';
import verifyToken from '../Middlewares/jwt.js';
import dashboard from '../Controllers/dashboard.js';

router.get('/',(req,res)=>{
    console.log("home page");
    res.send("welcome")
})
router.post('/login',login);
router.post('/signUp',signUp);
router.get('/dashboard',verifyToken,dashboard);


export default router;
import express from 'express';
const router =express.Router();
import { login,signUp } from '../Controllers/auth.js';

router.get('/',(req,res)=>{
    console.log("home page");
    res.send("welcome")
})
router.post('/login',login);
router.post('/signUp',signUp);

export default router;
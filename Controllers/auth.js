import User from "../Models/User.js";
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from "dotenv"
env.config()

const login=async (req,res)=>{
    try {
        console.log("Login Post section");
        console.log(req.body);
        const {email,password}=req.body;
       const user=await User.findOne({where:{email}})
       if(!user){
       return res.status(400).json({message:"User Doesnot exist"})
       }
       const passwordMatch=await bycrypt.compare(password,user.password)
       if(!passwordMatch){
       return res.status(400).json({message:'Password wrong'})   
       }
       const payload={id:user.id,email:user.email,username:user.username}
       const key=process.env.JWT_KEY
       const token=jwt.sign(payload,key)
    //    console.log(token);
       return res.status(200).json({message:"Login successfull",token})
    } catch (error) {
        console.error("error from login post section",error);
        res.status(500).json({ message: 'Server error',error });
    }

}


const signUp =async(req,res)=>{
    try {
        console.log("signUp Post section");
        console.log(req.body);
        const {userName,email,password}=req.body
        const exitstingUser=await User.findOne({where:{email}});
        // console.log(exitstingUser);
        if(exitstingUser){
            return res.status(400).json({message: 'User Already Exists'});
        }
        const hashedPassword=await bycrypt.hash(password,10);
        const newUser=await User.create({userName,email,password:hashedPassword});
        // console.log(newUser);
        res.status(201).json({message:'User registered succesfully',user:newUser})

    } catch (error) {
        console.error("error from signUp post section",error);
        res.status(500).json({ message: 'Server error',error })
    }
}

export {login,signUp}
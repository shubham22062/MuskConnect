import User from "../models/User.js";
import jwt from "jsonwebtoken"
import validator from "validator";


export async function signup(req,res){
    const {email , password , fullName} = req.body;
    
    try {
        if(!email|| !password||!fullName){
            return res.status(400).json({message:'All field is required'});
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters"});
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invali email format"})
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message:"Email is already exists, please use a differnt one"})
        }

        const idx = Math.floor(Math.random()*100)+1
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

        const newUser = await User.Create ({
            email,
            fullName,
            password,
            profilePic:randomAvatar
        })
    } catch (error) {
        console.log("Error in signup controller",error);
        res.status(500).json({message:"Internal server error"})
    }
} 
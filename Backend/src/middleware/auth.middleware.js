import jwt from "jsonwebtoken"
import User from "../models/User"


export const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;


        if(!token){
            return res.status(401).json({message:"unauthorized-NO token provided"})
        }
        

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    } catch (error) {
        
    }
}
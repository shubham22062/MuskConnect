import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js";


export async function getRecommendedUsers(req,res){
    try {
       const currentUserId = req.user.id 
       const currentUser = req.user
       
       const recommendedUsers = await User.find({
        $and: [
            {
                _id:{$ne:currentUserId}
            },
            {
                _id:{$nin:currentUser.friends}
            },
            {
                isOnBoarded:true
            }
        ],
       })

       res.status(200).json(recommendedUsers);
    } catch (error) {
        console.log("Error in getRecommendedUsers controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getMyFriends(req,res){
    try {
        const user = await User.findById(req.user.id)
        .select("friends")
        .populate("friends","fullname profilePic nativeLanguage learningLanguage");
    } catch (error) {
        console.error("Error in getMyFriends controllers", error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export async function sendFriendRequest(req,res){
    try {
       const myId = req.user.id;
       const{id:recipientId} = req.params 

       
    } catch (error) {
        
    }
}
import {StreamChat}  from "stream-chat";

import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecert = process.env.STEAM_API_KEY;


if(!apiKey||!apiSecert){
    console.error("Stream API key or Secret is missing")
}


const stremaClient = StreamChat.getInstance(apiKey, apiSecert);

export const upsertStreamUser  = async(userData) =>{
    try {
        await stremaClient.upsertUser([userData]);
        return userData;

    } catch (error) {
        console.error("Error upserting Stream user",error);
    }
}


export const generateStreamToken = (userId) =>{
    try {
        const userIdstr = userId.toString();
        return stremaClient.createToken(userIdstr);
    } catch (error) {
        console.error("Error generating Stream Token:", error)
    }
}
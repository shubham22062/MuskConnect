import {StreamChat}  from "stream-chat";

import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecert = process.env.STEAM_API_KEY;


if(!apiKey||!apiSecert){
    console.error("Stream API key or Secret is missing")
}


const stremaClient = StreamChat.getInstance(apiKey, apiSecert);
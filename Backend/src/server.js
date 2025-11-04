import express from "express"
import "dotenv/config"

const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.get("/signup",(req,res)=>{
    res.json({
        message:"Dmo route",
        status:200
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on the ${PORT}`)
})
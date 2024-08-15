const express = require("express")
const app = express()
const mongoose = require("mongoose")
const env = require("dotenv").config()
const userrouter = require("./Route/userrouter")
const cors = require("cors")
const socket = require("socket.io")

app.use(cors({origin:"*"}))
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true, limit:"50mb"}))
app.use("/user", userrouter)





const connect = () =>{
    try {
     const connection =  mongoose.connect(process.env.URI)
     if (connection) {
        console.log("Connected to database");
     }
    } catch (error) {
        console.log(error);
    }
}
connect()


const port = process.env.PORT

const connection = app.listen(port, ()=>{
    console.log(`app started at port ${port}`);
})

const io = socket(connection,{
    cors:({origin:"*"})
})

io.on("connect", (socket)=>{
    console.log("a user conected successfully");
    socket.on("newmessage", (message)=>{
        console.log(message);
        socket.emit("receivemessage", message)
    })
    
})
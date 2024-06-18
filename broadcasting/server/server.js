require('dotenv').config()

const express = require('express');
const cors = require('cors')
const http = require('http')
const {Server} = require("socket.io");
const mongoose = require('mongoose')


const userRoutes = require('./user')
const app = express()
app.use(express.json())

app.use('/api/user',userRoutes)

app.use(cors());

const server = http.createServer();

const io = new Server(server, {
    cors:{
        "origin": "http://localhost:3000/",
        "methods": "GET,POST"
    }
})

io.on("connection", (socket) => {
    console.log(`socket is connected successfully ${socket.id}`)
    
    socket.on("join_room", (room_id) => {
        socket.join(room_id)
    })

    socket.on("send_messages", async (data) => {
        console.log(data)
        socket.to(data.room_id).emit("receive_message", data);
    })
})

server.listen(3001,() => {
    console.log("Everything is running fine")
})


mongoose.set('strictQuery', true);
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
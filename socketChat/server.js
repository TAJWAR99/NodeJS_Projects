const path = require('path')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketIo(server)

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//run when client connects
io.on('connection', socket => {

    //single client
    socket.emit('message', 'Welcome to chatCord')

    //broadcast to connected user
    socket.broadcast.emit('message', 'A user has joined the chat')

    //when disconnects
    socket.on('disconnect', () => {
        //all the client
        io.emit('message', 'A user has left the chat')
    })
    //lister to chat message
    socket.on('chat-message', message => {
        io.emit('message', message)
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 
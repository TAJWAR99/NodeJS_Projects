import express from "express";
import bodyParser from "body-parser";
import bookRouter from "./routes/route.js";
import userRouter from "./routes/user.js";

import connect from "./db/connect.js";
import "dotenv/config";

const app =  express();

app.use(bodyParser.json());

app.use("/books", bookRouter);
app.use("/user", userRouter);

//default error handler
const errorHandler = (err, req, res, next) => {
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({"error": "Authentication Error"});
}

const PORT = 3000;
const start = async() => {
    try{
        await connect(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log("server is running");
        })
    } catch(error){
        console.log(error);
    }
}

start()
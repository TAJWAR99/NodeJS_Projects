import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/user.js";
import connect from "./db/connect.js";
import {errorHandler} from "./errorHandler/error.js";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());

app.use("/user", userRouter);

app.use(errorHandler);

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
import connectDB from "./db/connect.js";
import express from "express";
import bodyParser from "body-parser";
import userRoute from "./router/route.js"
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());

app.use("/users", userRoute);

// app.get("/", (req, res) => {
//     res.send("Hello World");
// })


const PORT = 3000;
// app.listen(PORT, () => console.log("Server is running on port " + PORT));

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log("Server is running on port " + PORT));
    } catch (error) {
        console.log(error);
    }
}

start()
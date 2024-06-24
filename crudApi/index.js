import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app = express();
const PORT = 3004;
 
app.use(bodyParser.json());

//all routes will start with /users
app.use('/users', userRouter);


app.listen(PORT, () => console.log("Server is listening on port "+PORT));
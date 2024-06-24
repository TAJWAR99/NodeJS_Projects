import express from "express";
import { getUsers, updateUser, addUser, getUserByID } from '../controllers/user.js';

import { v4 as uuidv4} from "uuid";
uuidv4();

const router = express.Router();

let users = []

router.get("/home", getUsers)

router.post("/add", addUser);

router.get("/:id", getUserByID);

router.patch("/update/:id", updateUser);

router.delete("/delete/:id", (req, res) => { 
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send("User is deleted");
 })

 
export default router;
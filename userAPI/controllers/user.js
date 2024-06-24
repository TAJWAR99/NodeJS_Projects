import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userInfo = async(req, res) => {
    const users = await User.find({}).select({
        password: 0,
    })
    if(users.length > 0){
        res.status(200).json({users});
    } else {
        res.status(200).json({message: "No user found"})
    }   
}

export const userSignUp = async(req, res) => {
    try{
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
        })
        await user.save();
        res.status(200).json({message: "New user created"})
    }catch(error){
        res.status(500).json({message: "Signup failed"})
    }
}

export const userSignIn = async(req, res) => {
    try {
        const user = await User.find({email: req.body.email});
        if(user && user.length > 0){
            const isValidPass = await bcrypt.compare(req.body.password, user[0].password);
            if(isValidPass) {
                const token = jwt.sign({
                    username: user[0].name
                },process.env.JWT_SECRET);
                res.status(200).json({message: "User logged in", token: token});
            } else {
                res.status(401).json({message: "Authentication Failed"});
            }
        } else {
            res.status(401).json({message: "Authentication Failed"});
        }
    } catch (error) {
        res.status(401).json({message: "Authentication Failed"});
    }
}
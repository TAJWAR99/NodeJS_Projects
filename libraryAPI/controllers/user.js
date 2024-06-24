import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import "dotenv/config";

export const userSignup = async(req,res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);//(pass, salt)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
        });
        await user.save();
        res.status(201).json({message: "User created"});
    } catch (error) {
        res.status(500).json({message: "Signup failed"})
    }
}

export const userLogin = async(req, res) => {
    try {
        const user = await User.find({name: req.body.name});
        if(user && user.length > 0){
            const isValidPass = await bcrypt.compare(req.body.password, user[0].password);
            if(isValidPass){
                //generate token
                const token = jwt.sign(
                    {
                        username: user[0].name,
                        userid: user[0]._id,
                    }, 
                    process.env.JWT_SECRET, 
                    {
                        expiresIn: "1h"
                    }
                );
                res.status(200).json({"access_token": token, "message": "Authentication successful"});
            }else{
                res.status(401).json({"error": "Authentication failed"});
            }
        }else{
            res.status(401).json({"error": "Authentication failed"});
        }
    } catch (error) {
        res.status(401).json({"error": "Authentication failed"});
    }
    
}

export const userInfo = async(req, res) => {
    // console.log(req.username);
    // console.log(req.userid);
    const users = await User.find({}).select({
        _id: 0,
        password: 0,
        __v: 0,
    })

    res.status(200).json({users});
}
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide a name'],
    },
    email:{
        type:String,
        required:[true, 'Please provide an email'],
    },
    password:{
        type:String,
        required:[true, 'Please provide a password'],
    }
})

export default mongoose.model("Users", userSchema);
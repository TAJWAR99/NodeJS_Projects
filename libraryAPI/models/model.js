import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please provide a title'],
        maxlength: 50
    },
    author:{
        type:String,
        required:[true, 'Please provide an author'],
        maxlength: 100
    },
    status:{
        type:String,
        enum:['read','unread'],
        default:'unread'
    },
    quantity:{
        type:Number,
        required:[true, 'Please provide a quantity'],
        min:1,
        max:100,
        default:1
    },
    publishedDate:{
        type:Date,
        required:[true, 'Please provide a published date'],
        default:Date.now
    }
})

export default mongoose.model("Books", bookSchema);

import mongoose from 'mongoose';


// const connectString = "";

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export default connectDB;
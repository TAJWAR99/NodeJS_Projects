import mongoose from "mongoose";

//const connectString = "mongodb+srv://atik:superman0193@accountdb.nevpphs.mongodb.net/libraryAPI?retryWrites=true&w=majority";

// mongoose.connect(connectString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("Connected to DB")).catch((err) => console.log(err));

const connect = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default connect;
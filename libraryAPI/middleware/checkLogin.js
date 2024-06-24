import jwt from "jsonwebtoken";

export const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    try{
        const token = authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log(decoded);
        const {username, userid} = decoded;
        req.username = username;
        req.userid = userid;
        //console.log("user info",req.username, req.userid);
        next();
    }catch(err){
        next("Authentication failed");
    }
}
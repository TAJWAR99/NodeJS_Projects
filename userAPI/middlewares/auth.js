import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        throw new Error();
    }
}
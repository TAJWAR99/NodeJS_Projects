import User from "../models/users.js";

export const getUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
}
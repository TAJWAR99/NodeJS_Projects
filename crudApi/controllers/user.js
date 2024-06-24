import { v4 as uuidv4 } from "uuid";

let users = []

export const getUsers = (req, res) => {
    res.send(users);
}

export const addUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4(); 
    //spread list and add id  
    const userwithId = {...user, id: userId};
    users.push(userwithId)
    res.send("User added");
}

export const getUserByID = (req, res) => {
    const { id } = req.params;
    const findUser = users.find((user) => user.id === id)
    res.send(findUser);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user) => user.id === id);
    
    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send("User updated");
}

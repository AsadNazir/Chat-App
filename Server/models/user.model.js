// Write code to insert data into the schema in the file Server\models\user.model.js:
// // Path: Server\models\user.model.js

const User = require("./user.schema");

const getUserByNameAndPassword = async (name, password) => {
    return await User.find({ name: name, password: password });
    }

const getUserByEmailAndPassword = async (email, password) => {
    return await User.find({ email: email, password: password });
}

const getUserByEmail = async (id) => {
    return await User.find({ email: email });
}

const enterUser = async (name, password, email, avatar, status, created_at, updated_at) => {
    const user = new User({
        name: name,
        password: password,
        email: email,
        avatar: avatar,
        status: status,
        created_at: created_at,
        updated_at: updated_at
    });
    return await user.save();
}

const getAllUsers = async () => {
    return await User.find({});
}

const updateUser = async (id, name, password, email, avatar, status, created_at, updated_at) => {
    const user = new User ({
        name: name,
        password: password,
        email: email,
        avatar: avatar,
        status: status,
        created_at: created_at,
        updated_at: updated_at
    });  
    return await User.updateOne(id, user);
    }

module.exports = { getUserByNameAndPassword, getUserByEmail, enterUser, updateUser, getUserByEmailAndPassword, getAllUsers };






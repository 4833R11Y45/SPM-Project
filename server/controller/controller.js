const Userdb = require('../model/model');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await Userdb.find();
        res.send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    }
};

// Create and save a new user
exports.create = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: "Content can not be empty!" });
        }

        const user = new Userdb({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        });

        const data = await user.save();
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    }
};

// Retrieve and return all users or a single user by ID
exports.find = async (req, res) => {
    try {
        if (req.query.id) {
            const id = req.query.id;
            const data = await Userdb.findById(id);
            if (!data) {
                res.status(404).send({ message: "Not found user with id " + id });
            } else {
                res.send(data);
            }
        } else {
            const users = await Userdb.find();
            res.send(users);
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Error Occurred while retrieving user information" });
    }
};

// Update an identified user by user ID
exports.update = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: "Data to update can not be empty" });
        }

        const id = req.params.id;
        const data = await Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!data) {
            res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` });
        } else {
            res.send(data);
        }
    } catch (err) {
        res.status(500).send({ message: "Error Update user information" });
    }
};

// Delete a user with a specified user ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Userdb.findByIdAndDelete(id);
        if (!data) {
            res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
        } else {
            res.send({ message: "User was deleted successfully!" });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    }
};

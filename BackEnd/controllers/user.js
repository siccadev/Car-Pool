const bcrypt = require('bcrypt');

const user = require('../models/user')

const getUsers = (req, res) => {
    user.getAll((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};
const getUserByEmail = (req, res) => {
    const searchTerm = req.params.email;
    if (!searchTerm) {
        return res.status(400).send("email parameter is missing");
    }

    user.getUser(searchTerm, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};
const register = async (req, res) => {
    const { firstName, lastName, birth, email, password } = req.body;

    if (!firstName || !lastName ||!birth || !email || !password) {
        return res.status(400).send("firstName, lastName, birth, email, and password are required");
    }

    const userData = { firstName, lastName, birth, email, password };

    user.register(userData, (err, success) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (success) {
            return res.status(201).send("User registered successfully");
        } else {
            return res.status(400).send("Registration failed");
        }
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    user.login(email, password, (err, success) => {
        if (err) {
            console.error("Login error:", err);
            return res.status(500).send(err);
        }

        if (success) {
            return res.status(200).json(success[0]);
        } else {
            return res.status(401).send("Login failed. Check your email and password.");
        }
    });
};

module.exports = { getUsers, getUserByEmail, register, login };
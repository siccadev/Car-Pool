const bcrypt = require('bcrypt');

const user =require('../models/user')

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
const addUser = async (req, res) => {
    try {
        const { firstName, lastName, email, birth, password } = req.body;

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            birth:birth,
            password: hashedPassword,
            // role:'user'
        };

        await user.register(newUser, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'User registered successfully' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const loginUser = async (req, res) => {
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

module.exports = { getUsers, getUserByEmail, addUser, loginUser };
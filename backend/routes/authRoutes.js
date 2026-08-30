const express = require("express");

const router = express.Router();


// Temporary user storage
const users = [];

// Register API


router.post("/register", (req, res) => {

    const { name, email, password } = req.body;


    // Check required fields

    if (!name || !email || !password) {

        return res.status(400).json({
            success: false,
            message: "Please provide name, email and password."
        });

    }


    // Check if user already exists

    const existingUser = users.find(
        user => user.email === email
    );


    if (existingUser) {

        return res.status(409).json({
            success: false,
            message: "User already exists."
        });

    }


    // Create user

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };


    users.push(newUser);


    res.status(201).json({

        success: true,

        message: "User registered successfully.",

        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }

    });

});

// Login API

router.post("/login", (req, res) => {

    const { email, password } = req.body;


    // Check required fields

    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message: "Please provide email and password."
        });

    }


    // Find user

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );


    if (!user) {

        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });

    }


    res.status(200).json({

        success: true,

        message: "Login successful.",

        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }

    });

});


module.exports = router;
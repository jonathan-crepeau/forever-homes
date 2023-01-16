const db = require('../models');
import bcrypt from 'bcrypt';

const test = (req, res) => {
    res.json({
        status: 200,
        message: "Test Auth route successful.."
    });
}

const signup = (req, res) => {
    // NOTE Validate each of the four required input fields have a value:
    if (!req.body.firstName || !req.body.lastName || !req.body.password || !req.body.email) {
        return res.status(400).json({message: "All fields are required"});
    }

    // NOTE Check for existing account
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(400).json({message: "Account not found, please try again."});

        // NOTE Return error if account already exists:
        if (foundUser) return res.status(400).json({message: 
        "Email has already been registered, please try again."});

        // NOTE Generate Hash Salt:
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(400).json({message: "Something went wrong with 'bcrypt', please try agian."});

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(400).json({message: "Something went wrong, please try agian."});

                const { firstName, lastName, email } = req.body;

                const newUser = {
                    firstName,
                    lastName,
                    email,
                    password: hash
                };

                db.User.create(newUser, (err, createdUser) => {
                    if (err) return res.status(400).json({message: "Bad request, please try again."});
                    res.status(201).json({
                        status: 201,
                        createdUser
                    });
                });
            });
        });
    });
}


// POST Login - Create Session
const createSession = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            status: 400,
            errors: [{message: "Please enter your email and password."}]
        });
    }

    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong, please try again.'}]
        });

        if (!foundUser) {
            return res.status(400).json({
                status: 400,
                errors: [{message: 'Username or password is incorrect.'}]
            });
        }

        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({
                status: 500,
                errors: [{message: 'Something went wrong, please try again.'}]
            });

            if (isMatch) {
                req.session.loggedIn = true;
                req.session.currentUser = foundUser._id;
                return res.status(200).json({
                    status: 200,
                    data: {id: foundUser._id}
                });
            } else {
                return res.json({
                    status: 400,
                    errors: [{message: 'Username or password is incorrect.'}]
                });
            }
        });
    });
};

export {test, signup, createSession}
const router = require("express").Router();
const { User } = require("../models/user");
const joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Find user by username and email
        const user = await User.findOne({ username: req.body.username, email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid username, email, or password!" });

        // Validate password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword)
            return res.status(401).send({ message: "Invalid username, email, or password!" });

        // Generate token
        const token = user.generateAuthToken();
        res.status(200).send({
            message: "Login successful!",
            token,
            username: user.username, // Include username in the response
        });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Validation schema
const validate = (data) => {
    const schema = joi.object({
        username: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
    });
    return schema.validate(data);
};

module.exports = router;
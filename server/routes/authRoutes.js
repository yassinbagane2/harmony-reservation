const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body.body);
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(401).json({ message: "Email is incorrect" });
    }
    bcrypt
      .compare(password, user.password)
      .then((doMatch) => {
        if (!doMatch) {
          return res.status(401).json({ message: "Password is incorrect" });
        }
        const accessToken = jwt.sign(
          {
            userId: user._id,
          },
          "saltsalt123",
          { expiresIn: "1y" }
        );
        return res
          .status(200)
          .json({
            accessToken,
            role: user.role,
            message: "Logged in successfully",
          });
      })
      .catch((err) => console.log(err));
  });
});

router.post("/register", (req, res) => {
  const { email, password, fullname } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user)
        return res.status(422).json({ message: "Email already exists" });
      bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          return (user = new User({
            fullname,
            email,
            password: hashedPassword,
          }));
        })
        .then(() => {
          user.save();
          return res.status(201).json({ message: "User created successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = router;

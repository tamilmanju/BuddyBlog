const express = require("express");
const Router = express.Router();
const userController = require("./../controllers/userController");

Router.route("/signup").post(userController.userSignup);

module.exports = Router;

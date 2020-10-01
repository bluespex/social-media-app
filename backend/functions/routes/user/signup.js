const { Router } = require("express");
const { signup } = require("../../handlers/user/signup");

const route = Router();

route.post("/", signup);

module.exports = route;

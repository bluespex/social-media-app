const { Router } = require("express");
const { login } = require("../../handlers/user/login");

const route = Router();

route.post("/", login);

module.exports = route;

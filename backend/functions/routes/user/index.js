const { Router } = require("express");

const route = Router();

route.use("/signup", require("./signup"));

module.exports = route;
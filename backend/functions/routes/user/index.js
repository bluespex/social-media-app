const { Router } = require("express");

const route = Router();

route.use("/signup", require("./signup"));
route.use("/login", require("./login"));

module.exports = route;

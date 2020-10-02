const { Router } = require("express");

const route = Router();

route.use("/signup", require("./signup"));
route.use("/login", require("./login"));
route.use("/uploadImage", require("./uploadImage"));

module.exports = route;

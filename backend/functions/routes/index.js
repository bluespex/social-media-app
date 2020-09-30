const { Router } = require("express");

const route = Router();

route.use("/user", require("./user"));
route.use("/scream", require("./scream"));

module.exports = route;

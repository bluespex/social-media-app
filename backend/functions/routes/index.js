const { Router } = require("express");

const route = Router();

route.use("/user", require("./user"));
route.use("/scream", require("./scream"));
route.use("/screams", require("./scream/getScreams"));

module.exports = route;

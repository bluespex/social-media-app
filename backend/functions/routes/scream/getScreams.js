const { Router } = require("express");
const { getAllScreams } = require("../../handlers/scream/getAllScreams");

const route = Router();

route.get("/", getAllScreams);

module.exports = route;

const { Router } = require("express");
const { getScream } = require("../../handlers/scream/getScream");

const route = Router();

route.get("/", getScream);

module.exports = route;

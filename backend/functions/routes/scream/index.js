const { Router } = require("express");
const { postOneScream } = require("../../handlers/scream/addScream");
const { getScream } = require("../../handlers/scream/getScream");
const FBauth = require("../../utils/FBauth");
const { addComment } = require("../../handlers/scream/addComment");

const route = Router();

route.get("/:screamId", getScream);
route.post("/", FBauth, postOneScream);
route.post("/:screamId/comment", FBauth, addComment);
// route.use("/delete", require("./delete"));

module.exports = route;

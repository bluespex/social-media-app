const { Router } = require("express");
const { postOneScream } = require("../../handlers/scream/addScream");
const { getScream } = require("../../handlers/scream/getScream");
const FBauth = require("../../utils/FBauth");
const { addComment } = require("../../handlers/scream/addComment");
const { like, unlike } = require("../../handlers/scream/like-unlike");
const { deleteScream } = require("../../handlers/scream/deleteScream");

const route = Router();

route.get("/:screamId", getScream);
route.post("/", FBauth, postOneScream);
route.post("/:screamId/comment", FBauth, addComment);
route.get("/:screamId/like", FBauth, like);
route.get("/:screamId/unlike", FBauth, unlike);

route.delete("/:screamId", FBauth, deleteScream);

module.exports = route;

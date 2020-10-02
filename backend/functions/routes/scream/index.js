const { Router } = require("express");
const { postOneScream } = require("../../handlers/scream/addScream");
const { getAllScreams } = require("../../handlers/scream/getAllScreams");
const FBauth = require("../../utils/FBauth");

const route = Router();

route.get("/", getAllScreams);
route.post("/", FBauth, postOneScream);
route.use("/getScream", require("./getScream"));
route.use("/delete", require("./delete"));

module.exports = route;

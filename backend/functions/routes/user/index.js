const { Router } = require("express");
const { addUserDetails } = require("../../handlers/user/addUserDetails");
const FBauth = require("../../utils/FBauth");
const {
  getAuthenticatedUser,
} = require("../../handlers/user/getAuthenticatedUser");

const route = Router();

route.use("/signup", require("./signup"));
route.use("/login", require("./login"));
route.use("/uploadImage", require("./uploadImage"));
route.post("/", FBauth, addUserDetails);
route.get("/", FBauth, getAuthenticatedUser);

module.exports = route;

const { Router } = require("express");
const { addUserDetails } = require("../../handlers/user/addUserDetails");
const FBauth = require("../../utils/FBauth");
const {
  getAuthenticatedUser,
} = require("../../handlers/user/getAuthenticatedUser");
const { getUserDetails } = require("../../handlers/user/getUserDetails");
const {
  markNotificationsRead,
} = require("../../handlers/user/markNotificationsRead");

const route = Router();

route.use("/signup", require("./signup"));
route.use("/login", require("./login"));
route.use("/uploadImage", require("./uploadImage"));
route.post("/", FBauth, addUserDetails);
route.get("/", FBauth, getAuthenticatedUser);

route.get("/:handle", getUserDetails);
route.post("/notifications", FBauth, markNotificationsRead);

module.exports = route;

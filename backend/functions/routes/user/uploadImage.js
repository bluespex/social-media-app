const { Router } = require("express");
const { uploadImage } = require("../../handlers/user/uploadImage");
const FBauth = require("../../utils/FBauth");
const route = Router();

route.post("/", FBauth, uploadImage);

module.exports = route;

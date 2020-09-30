const functions = require("firebase-functions");
const app = require("express")();

app.use("/", require("./routes"));
exports.api = functions.https.onRequest(app);

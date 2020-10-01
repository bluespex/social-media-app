const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

const firebase = require("firebase");
firebase.initializeApp(require("./config"));

module.exports = { admin, db, firebase };

const { db } = require("../../utils/admin");

exports.getAuthenticatedUser = (req, res) => {
  let userDetails = {};
  db.doc(`/users/${req.user.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userDetails.user = doc.data();
        return db
          .collection("likes")
          .where("userHandle", "==", req.user.handle)
          .get();
      }
    })
    .then((data) => {
      userDetails.likes = [];
      data.forEach((doc) => {
        userDetails.likes.push(doc.data());
      });
      return res.json(userDetails);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

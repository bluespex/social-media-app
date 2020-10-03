const { reduceUserInfo } = require("../../utils/validators");
const { db } = require("../../utils/admin");

exports.addUserDetails = (req, res) => {
  const userDetails = reduceUserInfo(req.body);

  db.doc(`/users/${req.user.handle}`)
    .update(userDetails)
    .then(() => {
      return res.json({ message: "Details added successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

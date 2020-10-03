const { db } = require("../../utils/admin");

exports.deleteScream = (req, res) => {
  const document = db.doc(`/screams/${req.params.screamId}`);
  let ok = 0;
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        ok = 1;
        return res.status(404).json({ error: "Scream not found" });
      }
      if (doc.data().userHandle !== req.user.handle) {
        ok = 1;
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      if (ok) return;
      return res.json({ message: "Scream deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

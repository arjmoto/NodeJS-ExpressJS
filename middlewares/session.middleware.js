const db = require("../db");
const { v4: uuidv4 } = require("uuid");
module.exports = (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    const sessionId = uuidv4();
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    db.get("sessions")
      .push({
        id: sessionId,
      })
      .write();
  }

  next();
};

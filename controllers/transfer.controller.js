const { v4: uuidv4 } = require("uuid");
const db = require("../db");
module.exports.create = (req, res, next) => {
  res.render("transfer/create");
};

module.exports.postCreate = (req, res, next) => {
  const data = {
    id: uuidv4(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId,
    userId: req.signedCookies.userId,
  };
  db.get("transfers").push(data).write();
  res.redirect("/transfer/create");
};

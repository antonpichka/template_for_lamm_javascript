const express = require("express");
const router = express.Router();
// const { OtherRedirect } = require("./public/src/named_utility/named_redirect/other_redirect");

router.get("/", (_req, res) => {
  res.sendFile(__dirname + "/public/src/named_vm/index_vm/index_view.html");
});

router.get("/other", (_req, res) => {
  // Using "OtherRedirect" if needs
  res.sendFile(__dirname + "/public/src/named_vm/other_vm/other_view.html");
});

module.exports = router;
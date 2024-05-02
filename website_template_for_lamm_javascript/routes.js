const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/src/named_vm/index_vm/index_view.html");
});

router.get("/other", (req, res) => {
  res.sendFile(__dirname + "/public/src/named_vm/other_vm/other_view.html");
});

module.exports = router;
const express = require("express");
const router = express.Router();
// const { OtherRedirectView } = require("./dist/other_redirect_view.js");

router.get("/", (_req, res) => {
  res.sendFile(__dirname + "/public/src/named_vm/index_vm/index_view.html");
});

router.get("/other", (_req, res) => {
  // Using "OtherRedirectView" if needs (new OtherRedirectView(()=>{},()=>{}))
  res.sendFile(__dirname + "/public/src/named_vm/other_vm/other_view.html");
});

module.exports = router;
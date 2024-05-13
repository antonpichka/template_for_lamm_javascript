const express = require("express");
const router = express.Router();
// const { OtherRedirectVM } = require("./dist/other_redirect_vm.js");

router.get("/", (_req, res) => {
  res.sendFile(__dirname + "/public/src/named_vm/index_vm/index_vm.html");
});

router.get("/other", (_req, res) => {
  // Using "OtherRedirectVM" if needs (new OtherRedirectVM(()=>{},()=>{}))
  res.sendFile(__dirname + "/public/src/named_vm/other_vm/other_vm.html");
});

module.exports = router;
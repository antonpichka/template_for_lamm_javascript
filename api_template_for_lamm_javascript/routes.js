const express = require("express");
const router = express.Router();
const { ExampleVM } = require("./public/src/named_vm/example_vm/example_vm.js");

router.get("/", (_req,res) => {
  res.status(200).json({
    timestamp : new Date().toLocaleString(),
    statusCode : 200,
    message : "Example API, v1.0.0 - All systems Go"
  });
});

router.get("/example", async (req, res) => {
  const authorization = req.header("Authorization");
  const exampleVM = new ExampleVM(authorization);
  await exampleVM.initWBuild(
    (list)=>{
      res.status(list[0]).json(list[1]);
    },
    ()=>{
      res.status(401).json({
        message: "401 (Unauthorized) You must specify 'Authorization'"
      });
    },
    ()=>{
      res.status(401).json({  
        message: "401 (Unauthorized) Token is not correct."
      });
    },
    (json)=>{
      res.status(200).json(json);
    });
  exampleVM.dispose();
});

module.exports = router;
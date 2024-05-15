const express = require("express");
const router = express.Router();
const { LoginVM }  = require("./dist/login_vm.js");
const { SearchVM } = require("./dist/search_vm.js");
const { UserVM } = require("./dist/user_vm.js");

router.post("/login", (req,res) => {
  const authorization = req.header("Authorization");
  const username = req.body.username;
  const password = req.body.password;
  new LoginVM(
    authorization,
    username,
    password,
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
    ()=>{
      res.status(400).json({  
        message: "400 (Bad Request) The request could not be understood by the server due to malformed syntax."
      });
    },
    ()=>{
      res.status(200).json({});
    });
});

router.get("/search", (req, res) => {
  const authorization = req.header("Authorization");
  const q = req.query.q;
  new SearchVM(
    authorization,
    q,
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
    ()=>{
      res.status(400).json({  
        message: "400 (Bad Request) The request could not be understood by the server due to malformed syntax."
      });
    },
    (json)=>{
      res.status(200).json(json);
    });
});

router.get("/user/:username", (req, res) => {
  const authorization = req.header("Authorization");
  const username = req.params.username;
  new UserVM(
    authorization,
    username,
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
});

module.exports = router;
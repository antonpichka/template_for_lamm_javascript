const express = require("express");
const router = express.Router();
const { LoginVM }  = require("./dist/login_vm.js");
const { ExampleVM } = require("./dist/example_vm.js");
const { SearchVM } = require("./dist/search_vm.js");
const { UserUsernameVM } = require("./dist/user_username_vm.js");

router.post("/login", async (req,res) => {
  const authorization = req.header("Authorization");
  const username = req.body.username;
  const password = req.body.password;
  const loginVM = new LoginVM(authorization,username,password);
  await loginVM.initWBuild(
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
  loginVM.dispose();
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

router.get("/search", async (req, res) => {
  const authorization = req.header("Authorization");
  const q = req.query.q;
  const searchVM = new SearchVM(authorization,q);
  await searchVM.initWBuild(
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
  searchVM.dispose();
});

router.get("/user/:username", async (req, res) => {
  const authorization = req.header("Authorization");
  const username = req.params.username;
  const userUsernameVM = new UserUsernameVM(authorization,username);
  await userUsernameVM.initWBuild(
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
  userUsernameVM.dispose();
});

module.exports = router;
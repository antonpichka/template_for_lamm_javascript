const express = require("express");
const router = express.Router();
const { LoginView }  = require("./dist/login_view.js");

router.post("/login", (req,res) => {
  const authorization = req.header("Authorization") == null ? null : req.header("Authorization").replace("Bearer ", "");
  const username = req.body.username == null || req.body.username == "" ? null : req.body.username;
  const password = req.body.password == null || req.body.password == "" ? null : req.body.password;
  new LoginView(
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
  const authorization = req.header("Authorization") == null ? null : req.header("Authorization").replace("Bearer ", "");
  const q = req.query.q == null ? null : req.query.q;
  if(authorization == null) {
    res.status(401).json({
      error: "401 (Unauthorized) You must specify 'Authorization'"
    });
    return;
  } 
  if(authorization != "f434343fwesferrrewsqswqwwrewdwq1") {
    res.status(401).json({  
      error: "401 (Unauthorized) Token is not correct."
    });
    return;
  }
  if(q == null) {
    res.status(400).json({  
      error: "400 (Bad Request) The request could not be understood by the server due to malformed syntax."
    });
    return;
  }
  if(q.charAt(0) != "q") {
    res.status(200).json({
    });
    return;
  }
  res.status(200).json({
    users : [
      {
        username: "q"
      },
      { 
        username: "qw",
      },
    ]
  });
});


router.get("/other", (req, res) => {
  const authorization = req.header("Authorization") == null ? null : req.header("Authorization").replace("Bearer ", "");
  if(authorization == null) {
    res.status(401).json({
      error: "401 (Unauthorized) You must specify 'Authorization'"
    });
    return;
  } 
  if(authorization != "f434343fwesferrrewsqswqwwrewdwq1") {
    res.status(401).json({  
      error: "401 (Unauthorized) Token is not correct."
    });
    return;
  }
  res.status(200).json({
    name: "Qwerty",
  });
});

router.get("/user/:id", (req, res) => {
  const authorization = req.header("Authorization") == null ? null : req.header("Authorization").replace("Bearer ", "");
  const id = req.params.id;
  if(authorization == null) {
    res.status(401).json({
      error: "401 (Unauthorized) You must specify 'Authorization'"
    });
    return;
  } 
  if(authorization != "f434343fwesferrrewsqswqwwrewdwq1") {
    res.status(401).json({  
      error: "401 (Unauthorized) Token is not correct."
    });
    return;
  }
  if(id != 1) {
    res.status(404).json({
      error: "404 (Not Found) Not found id, user"
    });
    return;
  }
  res.status(200).json({
    id: 1,
    name: "Qwerty",
    email: "qwerty@example.com"
  });
});

module.exports = router;
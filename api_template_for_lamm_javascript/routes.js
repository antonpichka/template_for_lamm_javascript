const express = require("express");
const router = express.Router();

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if(id != 1) {
    res.json({
      error: "Not found id, user"
    });
    return;
  }
  res.json({
    id: 1,
    name: "Qwerty",
    email: "qwerty@example.com"
  });
});

router.get("/other", (req, res) => {
  res.json({
    name: "Qwerty",
  });
});

router.post("/login", (req,res) => {
  const header = req.header("Authorization");
  const token = header != null ? header.replace("Bearer ", "") : null;
  const body = req.body;
  const username = body.username ?? "";
  const password = body.password ?? "";
  if(token == null) {
    res.json({  
      error: "You are not logged in"
    });
    return;
  } 
  if(token != "f434343fwesferrrewsqswqwwrewdwq1") {
    res.json({  
      error: "Token is not correct"
    });
    return;
  }
  if(username == "" || password == "") {
    res.json({  
      error: "Not found is body data, for insert user in database"
    });
    return;
  }
  res.json({
    username : username,
    password : password
  });
});

module.exports = router;
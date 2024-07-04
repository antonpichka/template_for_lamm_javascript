const { BaseModelRepository, EnumRWTMode, debugPrint } = require("library_architecture_mvvm_modify_javascript");
const ip = require("ip");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors")
const ExampleVM = require("./public/src/named_vm/example_vm/example_vm.js");
const SearchUsersVM = require("./public/src/named_vm/search_users_vm/search_users_vm.js");

dotenv.config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const ENUM_RWT_MODE = process.env.RELEASE_W_TEST_MODE == "RELEASE" ? EnumRWTMode.release : EnumRWTMode.test;
BaseModelRepository.enumRWTMode = ENUM_RWT_MODE;

app.use(cors());
app.use(express.json());

app.get("/", (_req,res) => {
  res.status(200).json({
    statusCode : 200  ,
    timestamp : new Date().toLocaleString(),
    message : "Example API, v1.0.0 - All systems Go"
  });
});

app.get("/example", async (req, res) => {
  const authorization = req.header("Authorization");
  const exampleVM = new ExampleVM(authorization);
  await exampleVM.initWBuild(
    (list)=>{
      res.status(list[0]).json(list[1]);
    },
    ()=>{
      res.status(401).json({
        statusCode: 401,
        timestamp : new Date().toLocaleString(),
        message: "401 (Unauthorized) You must specify 'Authorization'"
      });
    },
    ()=>{
      res.status(401).json({  
        statusCode: 401,
        timestamp : new Date().toLocaleString(),
        message: "401 (Unauthorized) Token is not correct."
      });
    },
    (json)=>{
      res.status(200).json(json);
    });
  exampleVM.dispose();
});

app.get("/search", async (req, res) => {
  const authorization = req.header("Authorization");
  const q = req.query.q;
  const searchUsersVM = new SearchUsersVM(authorization,q);
  await searchUsersVM.initWBuild(
    (list)=>{
      res.status(list[0]).json(list[1]);
    },
    ()=>{
      res.status(401).json({
        statusCode: 401,
        timestamp : new Date().toLocaleString(),
        message: "401 (Unauthorized) You must specify 'Authorization'"
      });
    },
    ()=>{
      res.status(401).json({  
        statusCode: 401,
        timestamp : new Date().toLocaleString(),
        message: "401 (Unauthorized) Token is not correct."
      });
    },
    (json)=>{
      res.status(200).json(json);
    });
  searchUsersVM.dispose();
});

app.listen(SERVER_PORT, () => {
  debugPrint(`Server running on: ${ip.address()}:${SERVER_PORT}`);
});
const { BaseModelRepository, EnumRWTMode, debugPrint } = require("library_architecture_mvvm_modify_javascript");
const ip = require("ip");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors")
const ExampleVM = require("./public/src/named_vm/example_vm/example_vm.js");
const SearchUsersVM = require("./public/src/named_vm/search_users_vm/search_users_vm.js");
const crypto = require('crypto');
const url = require('url');
const querystring = require('querystring');

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const ENUM_RWT_MODE = process.env.RELEASE_W_TEST == "RELEASE" ? EnumRWTMode.release : EnumRWTMode.test;
BaseModelRepository.enumRWTMode = ENUM_RWT_MODE;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req,res) => {
  res.status(200).json({
    statusCode : 200,
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

app.get("/telegram_auth", async (req, res) => {
  const botToken = "7250549190:AAEfjB1HDutzAAK7Dg0YAX72w4lIPm2HuHI";
  const parsedUrl = url.parse(req.url);
  const queryParams = querystring.parse(parsedUrl.query);

  const hash = queryParams.hash;
  const payload = JSON.parse(Buffer.from(queryParams.payload, 'base64').toString());

  const secretKey = crypto.createHash('sha256').update(botToken).digest();
  const checkHash = crypto.createHmac('sha256', secretKey).update(queryParams.payload).digest('hex');

  if (hash !== checkHash) {
    res.status(400).send('Invalid hash');
    return;
  }

  const user = payload.user;
  const userId = user.id;
  const firstName = user.first_name;
  const lastName = user.last_name;
  const username = user.username;

  res.status(200).json(
    {
      user : {
        user_id : userId,
        firstName : firstName,
        lastName : lastName,
        username : username
      }
    }
  );
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

app.listen(PORT, () => {
  debugPrint(`Server running on: ${ip.address()}:${PORT}`);
});
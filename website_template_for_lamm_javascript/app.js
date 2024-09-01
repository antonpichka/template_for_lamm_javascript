const { debugPrint } = require("library_architecture_mvvm_modify_javascript");
const ip = require("ip");
const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/public",express.static(__dirname + "/public/"));
app.use("/dist",express.static(__dirname + "/dist/"));
app.use("/",routes);

app.use((_req, res, _next) => {
  res.status(404).sendFile(__dirname + "/public/src/named_vm/not_found_vm/not_found_vm.html");
});

app.use((err, _req, res, _next) => {
  res.status(500).send("Server not working: " + err.stack);
});

app.listen(port, () => {
  debugPrint(`Server running on: ${ip.address()}:${port}`);
});
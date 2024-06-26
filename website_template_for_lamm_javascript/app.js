const express = require("express");
const app = express();
const routes = require("./routes");

app.use("/public",express.static(__dirname + "/public/"));
app.use("/dist",express.static(__dirname + "/dist/"));
app.use("/",routes);

app.use((_req, res, _next) => {
  res.status(404).sendFile(__dirname + "/public/src/named_vm/not_found_vm/not_found_vm.html");
});

app.use((err, _req, res, _next) => {
  res.status(500).send("Server not working: " + err.stack);
});

app.listen(3000, () => {
  console.log("Starting server on port: 3000");
});
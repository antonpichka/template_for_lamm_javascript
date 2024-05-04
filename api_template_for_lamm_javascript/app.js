const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use("/",routes);

app.listen(3001, () => {
  console.log("Starting server on port: 3001");
});
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use("/api", (_, res) => {
  res.json({ data: "API info here " });
});

app.listen(port, () => {
  console.log("Server live on", port);
});

console.log(process.env.USER);
console.log(process.env.PORT);
console.log(__filename);

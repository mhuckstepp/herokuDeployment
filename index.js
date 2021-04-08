const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", (req, res) => {
  res.status(200).json({ data: "API info here " });
});

app.listen(port, () => {
  console.log("Server live on", port);
});

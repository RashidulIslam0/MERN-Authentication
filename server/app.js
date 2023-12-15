const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const connectDB = require("./DB/db");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not found</h1>");
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});

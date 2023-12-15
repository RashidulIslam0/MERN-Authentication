const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/userRoute");
const connectDB = require("./DB/db");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use("/api/v1", authRoutes);

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

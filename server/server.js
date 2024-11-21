const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on ${PORT}`));
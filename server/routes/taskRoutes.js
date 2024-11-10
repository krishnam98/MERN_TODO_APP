const express = require("express");
const router = express.Router();
const task = require("../models/task");

// Post Request

router.post("/add", async (req, res) => {
  try {
    const newtask = new task(req.body);
    await newtask.save();
    res.json(newtask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Request

router.get("/get", async (req, res) => {
  try {
    const tasks = task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

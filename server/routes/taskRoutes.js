const express = require("express");
const router = express.Router();
const Day = require("../models/task");

// Post Request

router.post("/add", async (req, res) => {
  try {
    const filter = { day: req.body.day };
    const options = { upsert: false };
    const updateTask = {
      $push: {
        task: req.body.task,
      },
    };
    const result = await Day.updateOne(filter, updateTask, options);
    const UpdatedDay = await Day.findOne({ day: req.body.day });
    res.json(UpdatedDay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Request

router.get("/get", async (req, res) => {
  try {
    const allDays = await Day.find();
    res.json(allDays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE Request

router.delete("/delete", async (req, res) => {
  const day = req.body.day;
  const taskID = req.body.task_id;
  try {
    const updatedDay = await Day.findOneAndUpdate(
      { day },

      /*in Array of days this query searches for task field in days
       and furthur in task it searches for _id field*/
      {
        $pull: {
          task: { _id: taskID },
        },
      },
      { new: true } //return Updated Document
    );
    res.json(updatedDay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  title: { type: String, require: true },
  priority: { type: Boolean, require: true },
  completed: { type: Boolean, default: false },
});

const DaySchema = mongoose.Schema({
  day: { type: String, require: true },
  Story: { type: String, require: false },
  task: [TaskSchema],
});

module.exports = mongoose.model("Day", DaySchema);

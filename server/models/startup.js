const mongoose = require("mongoose");
const Day = require("./task");
const initialize = async () => {
  const defaultDays = [
    { day: "Monday", story: "", tasks: [] },
    { day: "Tuesday", story: "", tasks: [] },
    { day: "Wednesday", story: "", tasks: [] },
    { day: "Thursday", story: "", tasks: [] },
    { day: "Friday", story: "", tasks: [] },
    { day: "Saturday", story: "", tasks: [] },
    { day: "Sunday", story: "", tasks: [] },
  ];

  try {
    for (const dayData of defaultDays) {
      const existingDay = await Day.findOne({ day: dayData.day });
      if (!existingDay) {
        const newDay = new Day(dayData);
        await newDay.save();
        console.log(`created default day entry for ${dayData.day}`);
      }
    }
    console.log("default day set-up complete!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initialize;

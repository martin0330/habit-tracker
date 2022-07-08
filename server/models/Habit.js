const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const habitSchema = new Schema({
  habitName: {
    type: String,
    required: "Habit name is required.",
  },
  completedAt: [
    {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  ],
});

const Habit = model("Habit", habitSchema);

module.exports = Habit;

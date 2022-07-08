const { randEmail, randUserName, randPassword, randRecentDate } = require("@ngneat/falso");
const db = require("../config/connection");
const { User, Habit } = require("../models");

db.once("open", async () => {
  // const user = { email: randEmail(), username: randUserName(), password: randPassword() };
  // console.log("user", user);
  // const createdUser = await User.insertMany(user);

  // const habit = { habitName: "Exercise" };
  // console.log("habit", habit);
  // const createdHabit = await Habit.insertMany(habit, { setDefaultsOnInsert: true });
  const habitId = "62c5e552feab9af10eebf15d";

  Habit.insertMany(
    { habitName: "Exercise" },
    {
      $push: {
        completedAt: randRecentDate(),
      },
    }
  );
});

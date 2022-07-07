const { User, Habit } = require("../models");

const resolvers = {
  Query: {
    habits: async () => {
      return Habit.find();
    },
    habit: async (parent, { _id }) => {
      return Habit.findOne({ _id });
    },
    users: async () => {
      return User.find().select("-__v -password").populate("habits");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password").populate("habits");
    },
  },
};

module.exports = resolvers;

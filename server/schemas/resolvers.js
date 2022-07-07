const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;

// {
//   "username": "tester2",
//   "password": "test12345",
//   "email": "test2@test.com"
// }

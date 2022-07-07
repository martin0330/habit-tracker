const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const { User, Habit } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select("-__v -password").populate("habits");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
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

// {
//   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdGVyMyIsImVtYWlsIjoidGVzdDNAdGVzdC5jb20iLCJfaWQiOiI2MmM3NWZhNTI0OGM3YmE5ZjViODIxN2QifSwiaWF0IjoxNjU3MjMzMzE3LCJleHAiOjE2NTcyNDA1MTd9.PzMWx_sliSlNfnNyCdVtpjliY65410JhG-m_Ia71j2E"
// }

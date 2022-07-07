const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    username: String
    habits: [Habit]
  }

  type Habit {
    _id: ID
    habitName: String
    email: String
    completedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(email: String!): User
    habits(email: String): [Habit]
    habit(_id: ID!): Habit
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addHabit(habitName: String!): Habit
    addLog(habitId: ID!, completedDay: Date!): Habit
  }
`;

module.exports = typeDefs;

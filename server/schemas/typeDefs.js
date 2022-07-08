// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Habit {
    _id: ID
    habitName: String
    completedAt: String
  }

  type User {
    _id: ID
    username: String
    email: String
    habits: [Habit]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    habits(username: String): [Habit]
    habit(_id: ID!): Habit
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHabit(habitName: String!): Habit
    addCompletedAt(habitId: ID!): Habit
  }
`;

// export the typeDefs
module.exports = typeDefs;

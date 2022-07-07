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

  type Query {
    users: [User]
    user(username: String!): User
    habits(username: String): [Habit]
    habit(_id: ID!): Habit
  }
`;

// export the typeDefs
module.exports = typeDefs;

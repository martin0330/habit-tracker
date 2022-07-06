const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    habits: [Habit]
  }

  type Habit {
    _id: ID
    habitName: String
    email: String
    logs: [Log]
  }

  type Log {
    _id: ID
    completedDay: String
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

// unsure on addLog mutation, not sure if completedDate should be required since it already has a default

module.exports = typeDefs;

/*
type Auth {
  token: ID!
  user: User
}
*/

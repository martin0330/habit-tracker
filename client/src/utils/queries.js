import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      habits {
        _id
        habitName
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      habits {
        _id
        habitName
      }
    }
  }
`;

export const QUERY_HABIT = gql`
  query habit($habitname: String!) {
    habit(habitName: $habitName) {
      _id
      habitNam
    }
  }
`;

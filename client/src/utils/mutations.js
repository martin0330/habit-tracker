import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_HABIT = gql`
    mutation saveHabit($input: habitInput!) {
        saveHabit(input: $input) {
            _id
            username
            email
            savedHabits {
                habitName
                completedAt
            }
        }
    }
`;

export const REMOVE_habit = gql`
    mutation removeHabit($habitId: String!) {
        removeHabit(habitId: $habitId) {
            _id
            username
            savedHabits {
                habitName
                completedAt
            }
        }
    }
`;
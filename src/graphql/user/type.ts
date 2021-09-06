import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    storeUserFake( user: UserInput!): User!
    updateUserFake(id: ID!, user: UserInput!): User!
    deleteUserFake(id: ID!): Boolean!
  }

  type User{
    id: ID!
    name:String
    job:String
  }

  input UserInput {
   name:String
   job:String
  }
`;

export { typeDefs };

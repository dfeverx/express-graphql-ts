import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    User(id: String!): User!
    # Users: [User!]!
  }

  # type Mutation {
  #   storeUser( User: UserInput!): User!
  #   updateUser(id: ID!, User: UserInput!): User!
  #   deleteUser(id: ID!): Boolean!
  # }

  type User{
    # id: ID!
    name:String
    occupation:[String]
  
  }

  input UserInput {
    name:String
    occupation:[String]
  }
`;

export { typeDefs };

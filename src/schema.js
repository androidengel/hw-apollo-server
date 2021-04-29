const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    link(id: Int!): Link
    allLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;

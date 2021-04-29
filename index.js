const { ApolloServer, gql } = require("apollo-server");
const models = require("./models");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: (root, args, context) => "Hello world!"
//   }
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

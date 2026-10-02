const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");
const { typeDefs, resolvers } = require("./schema");

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startServer() {
  await server.start();
  app.use("/graphql", express.json(), expressMiddleware(server));
  app.listen(4000, () => {
    console.log("GraphQL server running on http://localhost:4000/graphql");
  });
}   

startServer();
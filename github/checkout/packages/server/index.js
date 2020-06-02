const { ApolloServer, gql } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema/schema');


const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 5000})
      .then(serverInfo => console.log(`Server running from ${serverInfo.url}`));

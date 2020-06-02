const { gql } = require("apollo-server");
const axios = require("axios");
const api = require('../api/index');

const typeDefs = gql`
  type Query {
    products: [Products!]!
  }

  type Products {
    id: String!
    image: String!
    title: String!
    price: String!
    shipStatus: String!
  }
`;

// Resolver func
const resolvers = {
  Query: {
    products: (parent, args) =>
      api.get(`/products`).then((res) => res.data),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

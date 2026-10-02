const typeDefs = `
  type User {
    name: String!
    age: Int!
    email: String!
  }

  type Query {
    getUser: User!
  }
`;

const resolvers = {
  Query: {
    getUser: () => ({
      name: "hannan",
      age: 25,
      email: "hannan@example.com"
    })
  }
};

module.exports = { typeDefs, resolvers };
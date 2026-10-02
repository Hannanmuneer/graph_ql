function queryResolver() {
    return {
        name: "hannan",
        age: 21,
        email: "hannan@example.com"
    };
}

const resolvers = {
    Query: {
        getUser: queryResolver
    }
};


module.exports = resolvers;
function queryResolver() {
    return {
        name: "hannan",
        age: 25,
        email: "hannan@example.com"
    };
}

const resolvers = {
    Query: {
        getUser: queryResolver
    }
};


module.exports = resolvers;
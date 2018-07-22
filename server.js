const express = require("express");
const expressGraphQL = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
  message: () => "Hello world"
};

// Create express server and graphQL endpoint
const app = express();
app.use("/graphql", expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () =>
  console.log("GraphQL Server Running On localhost:4000/graphql")
);

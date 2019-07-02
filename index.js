const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');


var schema = buildSchema(
    ` type Query {
        hello: String
    }`
);

const root = {
    hello: () => {
        return 'Hello World';
    },
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(4000);

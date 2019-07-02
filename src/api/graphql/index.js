import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
import { importSchema } from 'graphql-import'
import resolvers from './resolvers';

const schema = buildSchema(importSchema('./src/api/graphql/schema.graphql'));

export default graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
})
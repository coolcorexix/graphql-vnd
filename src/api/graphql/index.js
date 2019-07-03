import { 
    buildSchema,
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {
    HerbQuery,
} from 'mapper-gql/queries';
import {
    HerbMutation,
} from 'mapper-gql/mutations';

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
    fields: () => ({
        herb: HerbQuery,
    }),
})

const {
    createHerb,
} = HerbMutation;

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    description: 'This is the root query which holds all possible WRITE entrypoints for the GraphQL API',
    fields: () => ({
        createHerb,
    }),
})

const schema = new GraphQLSchema({
        query: RootQuery,
        mutation: RootMutation,
    });

export default graphqlHTTP({
    schema,
    graphiql: true,
})
import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {
    HerbPaginationQuery,
} from 'mapper-gql/queries';
import {
    HerbMutation,
} from 'mapper-gql/mutations';

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'This is the root query which' +
    ' holds all possible READ entrypoints for the GraphQL API',
    fields: () => ({
        herbs: HerbPaginationQuery,
    }),
});

const {
    createHerb,
    deleteHerb,
    updateHerb,
} = HerbMutation;

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    description: 'This is the root query which' +
    ' holds all possible WRITE entrypoints for the GraphQL API',
    fields: () => ({
        createHerb,
        deleteHerb,
        updateHerb,
    }),
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

export default graphqlHTTP({
    schema,
    graphiql: true,
});

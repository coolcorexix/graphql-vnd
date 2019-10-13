import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {
    PostQuery,
} from 'mapper-gql/queries';
import Mutations from 'mapper-gql/mutations/index';
import {
    BasicPostType,
    EmbeddedPostType,
} from 'mapper-gql/types';

const {
    PostMutation,
} = Mutations;

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'This is the root query which' +
    ' holds all possible READ entrypoints for the GraphQL API',
    fields: () => ({
        post: PostQuery,
    }),
});

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    description: 'This is the root query which' +
    ' holds all possible WRITE entrypoints for the GraphQL API',
    fields: () => ({
        ...PostMutation,
    }),
});

const schema = new GraphQLSchema({
    types: [BasicPostType, EmbeddedPostType],
    query: RootQuery,
    mutation: RootMutation,
});

export default graphqlHTTP({
    schema,
    graphiql: true,
});

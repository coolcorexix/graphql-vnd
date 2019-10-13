import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {
    HerbPaginationQuery,
    HerbQuery,
    PostQuery,
} from 'mapper-gql/queries';
import {
    HerbMutation,
    PostMutation,
} from 'mapper-gql/mutations';
import {
    HerbInStock,
    HerbPreOrder,
    BasicPostType,
    EmbeddedPostType,
} from 'mapper-gql/types';

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'This is the root query which' +
    ' holds all possible READ entrypoints for the GraphQL API',
    fields: () => ({
        herbs: HerbPaginationQuery,
        herb: HerbQuery,
        post: PostQuery,
    }),
});

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    description: 'This is the root query which' +
    ' holds all possible WRITE entrypoints for the GraphQL API',
    fields: () => ({
        ...HerbMutation,
        ...PostMutation,
    }),
});

const schema = new GraphQLSchema({
    types: [HerbInStock, HerbPreOrder, BasicPostType, EmbeddedPostType],
    query: RootQuery,
    mutation: RootMutation,
});

export default graphqlHTTP({
    schema,
    graphiql: true,
});

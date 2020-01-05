import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {
    PostQuery,
    PostPaginationQuery,
} from 'mapper-gql/queries/index';
import {
    PostMutation,
} from 'mapper-gql/mutations/index';
import {
    BasicPostType,
    EmbeddedPostType,
} from 'mapper-gql/types/index';

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'This is the root query which' +
    ' holds all possible READ entrypoints for the GraphQL API',
    fields: () => ({
        post: PostQuery,
        posts: PostPaginationQuery,
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

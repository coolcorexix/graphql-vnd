import {GraphQLObjectType, GraphQLBoolean} from 'graphql';

export default new GraphQLObjectType({
    name: 'PageInfo',
    fields: () => ({
        hasNextPage: {
            type: GraphQLBoolean,
            resolve: (pageInfo) => pageInfo.hasNextPage,
        },
    }),
});

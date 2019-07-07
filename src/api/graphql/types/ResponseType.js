import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType(
    {
        name: 'response',
        fields: () => ({
            status: {
                type: GraphQLInt,
                resolve: (response) => response.status,
            },
            message: {
                type: GraphQLString,
                resolve: (response) => response.message,
            },
        }),
    }
);

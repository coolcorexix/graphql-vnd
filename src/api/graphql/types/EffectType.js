import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Effect',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (effect) => effect.name,
        },
        value: {
            type: GraphQLInt,
            resolve: (effect) => effect.value,
        },
    }),
});


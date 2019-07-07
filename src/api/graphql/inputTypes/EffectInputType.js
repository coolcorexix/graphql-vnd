import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'InputEffect',
    fields: () => ({
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString),
        },
        value: {
            name: 'value',
            type: new GraphQLNonNull(GraphQLInt),
        },
    }),
});

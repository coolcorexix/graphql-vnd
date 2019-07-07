import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} from 'graphql';

import EffectInputType from './EffectInputType';

export default new GraphQLInputObjectType({
    name: 'HerbInputType',
    fields: () => ({
        name: {
            type: GraphQLString,
        },
        flavors: {
            type: new GraphQLList(GraphQLString),
        },
        effects: {
            type: EffectInputType,
        },
        description: {
            type: GraphQLString,
        },
        available: {
            type: GraphQLInt,
        },
    }),
});

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLEnumType,
} from 'graphql';

import EffectType from './EffectType';

export const HerbStockStatus = new GraphQLEnumType({
    name: 'HerbStockStatus',
    values: {
        PREORDER: {
            value: 'PREORDER',
        },
        INSTOCK: {
            value: 'INSTOCK',
        },
    },
});

export default new GraphQLObjectType({
    name: 'Herb',
    fields: () => ({
        available: {
            type: GraphQLString,
            resolve: (herb) => herb.available,
        },
        description: {
            type: GraphQLString,
            resolve: (herb) => herb.description,
        },
        effects: {
            type: new GraphQLList(EffectType),
            resolve: (herb) => herb.effects,
        },
        flavors: {
            type: new GraphQLList(GraphQLString),
            resolve: (herb) => herb.flavors,
        },
        id: {
            type: GraphQLID,
            resolve: (herb) => herb.id,
        },
        name: {
            type: GraphQLString,
            resolve: (herb) => herb.name,
        },
        tags: {
            type: new GraphQLList(GraphQLString),
            resolve: (herb) => herb.tags,
        },
        thumbnailURL: {
            type: GraphQLString,
            resolve: (herb) => herb.thumbnailURL,
        },
        stockStatus: {
            type: HerbStockStatus,
            resolve: (herb) => herb.stockStatus,
        },
    }),
});

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLEnumType,
    GraphQLInterfaceType,
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

export const IHerb = new GraphQLInterfaceType({
    name: 'IHerb',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
    }),
    resolveType: (herb) => {
        if (herb.currentStage) {
            return HerbPreOrder;
        };
        if (herb.available) {
            return HerbInStock;
        }
    },
});

export const HerbInStock = new GraphQLObjectType({
    name: 'HerbInStock',
    interfaces: [IHerb],
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        available: {
            type: GraphQLInt,
        },
    }),
});

export const HerbPreOrder = new GraphQLObjectType({
    name: 'HerbPreOrder',
    interfaces: [IHerb],
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        currentStage: {
            type: GraphQLString,
        },
    }),
});

export default new GraphQLObjectType({
    name: 'Herb',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        effects: {
            type: new GraphQLList(EffectType),
        },
        flavors: {
            type: new GraphQLList(GraphQLString),
        },
        tags: {
            type: new GraphQLList(GraphQLString),
        },
        thumbnailURL: {
            type: GraphQLString,
        },
        stockStatus: {
            type: HerbStockStatus,
        },
        available: {
            type: GraphQLInt,
        },
        currentStage: {
            type: GraphQLString,
        },
    }),
});

import {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
  } from 'graphql';
import { HerbType, EffectType } from '../types';
import { HerbModel } from '../../models';

const createHerb = {
    type: HerbType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString),
        },
        flavors: {
            name: 'flavors',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
        effects: {
            name: 'effects',
            type: new GraphQLList(EffectType),
        },
        description: {
            name: 'description',
            type: GraphQLString,
        },
        available: {
            name: 'available',
            type: new GraphQLNonNull(GraphQLInt),
        }
    },
    resolve: (value, { name, flavors, effects, description, available }) => {
        HerbModel.create({
            name,
            flavors,
            available,
            effects,
            description,
        })
    },
}

export default {
    createHerb,
}
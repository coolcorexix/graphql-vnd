import {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
  } from 'graphql';
import { HerbType } from '../types';
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
    },
    resolve: (value, { name, flavors }) => HerbModel.create({
        name,
        flavors,
    }),
}

export default {
    createHerb,
}
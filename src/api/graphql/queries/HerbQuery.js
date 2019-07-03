import {
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
 } from 'graphql';

import { HerbType } from 'mapper-gql/types';
import { HerbModel } from 'mapper-api/models';

export default {
    type: new GraphQLList(HerbType),
    args: {
        id: {
            name: 'id',
            type: GraphQLID,
        },
        name: {
            name: 'name',
            type: GraphQLString,
        }
    },
    resolve: (herb, args) => HerbModel.findAll({ where: args}),
}
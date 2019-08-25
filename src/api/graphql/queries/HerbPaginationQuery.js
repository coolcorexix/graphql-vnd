import {
    GraphQLList,
    GraphQLInt,
    GraphQLID,
} from 'graphql';

import {HerbType} from 'mapper-gql/types';
import {HerbInputType} from 'mapper-gql/inputTypes';
import {HerbModel} from 'mapper-api/models';

export default {
    type: new GraphQLList(HerbType),
    args: {
        filters: {
            type: HerbInputType,
        },
        first: {
            type: GraphQLInt,
        },
        after: {
            type: GraphQLID,
        },
    },
    resolve: async (herb, args) => {
        const {
            after,
            filters,
            first,
        } = args;
        return HerbModel.find({
            ...(!!after && {_id: {$lt: after}}),
            ...filters,
        },
        null,
        {
            ...(!!first && {limit: first}),
            sort: {
                _id: -1,
            },
        });
    },
};

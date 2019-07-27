import {
    GraphQLList,
    GraphQLString,
} from 'graphql';

import {HerbType} from 'mapper-gql/types';
import {HerbModel} from 'mapper-api/models';

export default {
    type: new GraphQLList(HerbType),
    args: {
        name: {
            name: 'name',
            type: GraphQLString,
        },
    },
    resolve: async (herb, args) => HerbModel.find(args),
};

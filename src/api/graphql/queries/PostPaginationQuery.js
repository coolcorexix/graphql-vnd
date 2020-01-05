
import {
    GraphQLList,
} from 'graphql';

import {PostModel} from '~/api/models/index';

import {generatePaginationArguments} from '~/utils/graphql';
import {PostInterfaceType} from 'mapper-gql/types';
import {PostInputType} from 'mapper-gql/inputTypes';

export default {
    type: new GraphQLList(PostInterfaceType),
    args: generatePaginationArguments(PostInputType),
    resolve: async (_, args) => {
        const {
            after,
            filters,
            limit,
        } = args;
        return PostModel.find(
            {
                ...(!!after && {_id: {$lt: after}}),
                ...filters,
            },
            null,
            {
                ...(!!limit && {limit}),
                sort: {
                    _id: -1,
                },
            }
        );
    },
};

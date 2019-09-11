
import {
    GraphQLList,
} from 'graphql';

import {generatePaginationArguments} from '~/utils/graphql';
import {PostUnionType} from 'mapper-gql/types';
import {PostInputType} from 'mapper-gql/inputTypes';

export default {
    type: new GraphQLList(PostUnionType),
    args: generatePaginationArguments(PostInputType),
    resolve: () => {
        
    },
};


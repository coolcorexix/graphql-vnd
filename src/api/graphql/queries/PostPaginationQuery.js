
import {
    GraphQLList,
} from 'graphql';

import {generatePaginationArguments} from '~/utils/graphql';
import {PostInterfaceType} from 'mapper-gql/types';
import {PostInputType} from 'mapper-gql/inputTypes';

export default {
    type: new GraphQLList(PostInterfaceType),
    args: generatePaginationArguments(PostInputType),
    resolve: () => {
        
    },
};


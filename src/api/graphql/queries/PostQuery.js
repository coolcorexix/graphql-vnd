import {GraphQLID} from 'graphql';
import {PostInterfaceType} from 'mapper-gql/types';
import {PostModel} from 'mapper-api/models';

export default {
    type: PostInterfaceType,
    args: {
        _id: {
            type: GraphQLID,
        },
    },
    resolve: (_, args) => {
        return PostModel.findOne(args);
    },
};

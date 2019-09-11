import {GraphQLID} from 'graphql';
import {PostUnionType} from 'mapper-gql/types';
import {PostModel} from 'mapper-api/models';

export default {
    type: PostUnionType,
    args: {
        _id: {
            type: GraphQLID,
        },
    },
    resolve: (_, args) => {
        return PostModel.findOne(args);
    },
};

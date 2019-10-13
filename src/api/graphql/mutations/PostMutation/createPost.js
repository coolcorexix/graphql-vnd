import {generateCreatePayloadType} from '~/utils/graphql';
import {simpleCreateDocument} from '~/utils/mongoDb';
import {
    PostInterfaceType,
} from 'mapper-gql/types';
import {PostInputType} from 'mapper-gql/inputTypes';

import {PostModel} from 'mapper-api/models';

export default {
    type: generateCreatePayloadType({
        operationName: 'CreatePost',
        itemType: PostInterfaceType,
    }),
    args: {
        input: {
            type: PostInputType,
        },
    },
    resolve: (_, {input}) => simpleCreateDocument({
        collectionModel: PostModel,
        insertData: input,
    }),
};

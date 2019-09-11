import {generateCreatePayloadType} from '~/utils/graphql';
import {simpleCreateDocument} from '~/utils/mongoDb';
import {PostUnionType} from 'mapper-gql/types';
import {PostInputType} from 'mapper-gql/inputTypes';

import {PostModel} from 'mapper-api/models';

export default {
    type: generateCreatePayloadType({
        operationName: 'CreatePost',
        itemType: PostUnionType,
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

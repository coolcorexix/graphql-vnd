import {
    GraphQLInputObjectType,
} from 'graphql';
import {
    BasicPostFields,
    ServicePlatformEnumType,
} from 'mapper-gql/types/PostType';

import SimpleUserInputType from './SimpleUserInputType';

export default new GraphQLInputObjectType(
    {
        name: 'PostInput',
        fields: () => {
            const {
                comments,
                ...inputValues
            } = BasicPostFields;
            if (comments) {};
            return ({
                ...inputValues,
                author: {
                    type: SimpleUserInputType,
                },
                servicePlatform: {
                    type: ServicePlatformEnumType,
                },
            });
        },
    }
);

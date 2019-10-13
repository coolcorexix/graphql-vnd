import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
} from 'graphql';
import {GraphQLInputObjectType} from 'graphql';
import {ResponseType} from 'mapper-gql/types';

export function generateCorrespondingInputType({
    name,
    objectType,
}) {
    return new GraphQLInputObjectType({
        name,
        fields: objectType._fields(),
    });
}

export function generatePaginationArguments(filterType) {
    return {
        filters: {
            type: filterType,
        },
        after: {
            type: GraphQLID,
        },
        limit: {
            type: GraphQLInt,
        },
    };
};

export function generateCreatePayloadType({
    operationName,
    itemType,
}) {
    return new GraphQLObjectType(
        {
            name: `${operationName}PayloadType`,
            fields: () => ({
                item: {
                    type: itemType,
                },
                response: {
                    type: ResponseType,
                    resolve: (resolveReturnValue) => {
                        const {
                            error,
                            item,
                        } = resolveReturnValue;
                        if (error) {
                            return {
                                status: error.statusCode || 500,
                                message: error.message,
                            };
                        }
                        if (item) {
                            return {
                                status: 201,
                            };
                        };
                    },
                },
            }),
        }
    );
}

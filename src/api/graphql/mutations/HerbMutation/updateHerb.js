import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
} from 'graphql';
import {ResponseType} from 'mapper-gql/types';
import {HerbInputType} from 'mapper-gql/inputTypes';
import {HerbModel} from 'mapper-api/models';

const InputType = new GraphQLInputObjectType({
    name: 'UpdateHerbInputType',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        patch: {
            type: HerbInputType,
        },
    }),
});

const PayloadType = new GraphQLObjectType({
    name: 'UpdateHerbPayloadType',
    fields: () => ({
        response: {
            type: ResponseType,
        },
        affected: {
            type: GraphQLInt,
        },
    }),
});


export default {
    type: PayloadType,
    args: {
        input: {
            type: new GraphQLNonNull(InputType),
        },
    },
    resolve: async (values, {input}) => {
        const {
            id,
            patch,
        } = input;
        try {
            const numAffected = await HerbModel.update({_id: id}, patch);
            if (numAffected === 0) {
                return ({
                    response: {
                        status: 400,
                    },
                    affected: numAffected,
                });
            }
            return ({
                response: {
                    status: 203,
                },
                affected: numAffected,
            });
        } catch (err) {
            return (
                {
                    response: {
                        status: 500,
                    },
                }
            );
        }
    },
};

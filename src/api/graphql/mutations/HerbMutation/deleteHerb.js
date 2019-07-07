import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql';
import {HerbModel} from 'mapper-api/models';
import {ResponseType} from 'mapper-gql/types';

const InputType = new GraphQLInputObjectType({
    name: 'DeleteHerbInputType',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
    }),
});

const PayloadType = new GraphQLObjectType({
    name: 'DeleteHerbPayloadType',
    fields: () => ({
        response: {
            type: ResponseType,
        },
    }),
});

export default {
    type: PayloadType,
    args: {
        input: {
            type: InputType,
        },
    },
    resolve: async (value, {input}) => {
        try {
            await HerbModel.deleteOne(input);
            return {
                response: {
                    status: 203,
                },
            };
        } catch (err) {
            return {
                response: {
                    status: 500,
                    message: err.message,
                },
            };
        }
    },
};

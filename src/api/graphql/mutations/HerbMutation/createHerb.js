import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} from 'graphql';
import {EffectInputType} from 'mapper-gql/inputTypes';
import {ResponseType, HerbType} from 'mapper-gql/types';
import {HerbModel} from 'mapper-api/models';

const InputType = new GraphQLInputObjectType({
    name: 'CreateHerbInputType',
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        flavors: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
        effects: {
            type: new GraphQLList(EffectInputType),
        },
        description: {
            type: GraphQLString,
        },
        available: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    }),
});

const PayloadType = new GraphQLObjectType({
    name: 'CreateHerbPayloadType',
    fields: () => ({
        herb: {
            type: HerbType,
            resolve: (payload) => payload.herb,
        },
        response: {
            type: ResponseType,
            resolve: (payload) => {
                if (payload.herb) {
                    return ({
                        status: 203,
                        message: '',
                    });
                } else {
                    return ({
                        status: 400,
                        message: 'Something went wrong',
                    });
                }
            },
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
    resolve: async (value, {
        input: {
            name, flavors, effects,
            description, available,
        }}) => {
        if ((await HerbModel.find({name})).length === 0) {
            const herb = await HerbModel.create({
                name,
                flavors,
                available,
                effects,
                description,
            });
            console.log(herb);
            return {
                herb,
            };
        };
    },
};

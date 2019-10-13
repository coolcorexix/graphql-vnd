import {
    GraphQLInterfaceType,
    GraphQLID,
} from 'graphql';

export default new GraphQLInterfaceType({
    name: 'NodeInterface',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
    }),
});

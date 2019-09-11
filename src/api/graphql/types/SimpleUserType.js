import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} from 'graphql';
import NodeInterfaceType from './NodeInterfaceType';

export default new GraphQLObjectType({
    name: 'SimpleUser',
    interfaces: [NodeInterfaceType],
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
    }),
});

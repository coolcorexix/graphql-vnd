import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Herb',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: (herb) => herb.id,
        },
        name: {
            type: GraphQLString,
            resolve: (herb) => herb.name,
        },
        flavors: {
            type: new GraphQLList(GraphQLString),
            resolve: (herb) => herb.flavors,
        }
    })
})
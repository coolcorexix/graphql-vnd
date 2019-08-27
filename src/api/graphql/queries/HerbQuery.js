import {GraphQLString} from 'graphql';
import {HerbModel} from 'mapper-api/models';
import {IHerb} from 'mapper-gql/types';

export default {
    type: IHerb,
    args: {
        name: {
            type: GraphQLString,
        },
    },
    resolve: (_, args) => {
        return HerbModel.findOne(args);
    },
};

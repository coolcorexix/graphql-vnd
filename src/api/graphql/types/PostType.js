import {
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLEnumType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
} from 'graphql';

import UserType from './SimpleUserType';

export const ServicePlatformEnumType = new GraphQLEnumType({
    name: 'ServicePlatformEnum',
    values: {
        facebook: {
            value: 'facebook',
        },
        youtube: {
            value: 'youtube',
        },
        soundcloud: {
            value: 'soundcloud',
        },
    },
});

export const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        author: {
            type: UserType,
        },
        content: {
            type: GraphQLString,
        },
    }),
});

// TODO: change to interface, union is not approriate

export const BasicPostFields = {
    id: {
        type: GraphQLID,
    },
    title: {
        type: GraphQLString,
    },
    description: {
        type: GraphQLString,
    },
    resourceURL: {
        type: GraphQLString,
    },
    comments: {
        type: new GraphQLList(CommentType),
    },
};

export const BasicPostType = new GraphQLObjectType({
    name: 'BasicPost',
    fields: () => ({
        ...BasicPostFields,
    }),
});

export const EmbeddedPostType = new GraphQLObjectType({
    name: 'EmbeddedPost',
    fields: () => ({
        ...BasicPostFields,
        servicePlatform: {
            type: ServicePlatformEnumType,
        },
    }),
});

export const PostUnionType = new GraphQLUnionType({
    name: 'PostUnion',
    types: [BasicPostType, EmbeddedPostType],
    resolveType: (post) => {
        if (!post.servicePlatform) {
            return BasicPostType;
        }
        return EmbeddedPostType;
    },
});

import {
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLInterfaceType,
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
};

export const PostInterfaceType = new GraphQLInterfaceType({
    name: 'PostInterfaceType',
    fields: () => ({
        ...BasicPostFields,
        comments: {
            type: new GraphQLList(CommentType),
        },
    }),
    resolveType: (post) => {
        if (post.servicePlatform) {
            return EmbeddedPostType;
        }
        return BasicPostType;
    },
});

export const BasicPostType = new GraphQLObjectType({
    name: 'BasicPost',
    interfaces: [PostInterfaceType],
    fields: () => ({
        ...BasicPostFields,
        comments: {
            type: new GraphQLList(CommentType),
        },
    }),
});

export const EmbeddedPostType = new GraphQLObjectType({
    name: 'EmbeddedPost',
    interfaces: [PostInterfaceType],
    fields: () => ({
        ...BasicPostFields,
        comments: {
            type: new GraphQLList(CommentType),
        },
        servicePlatform: {
            type: ServicePlatformEnumType,
        },
    }),
});

// TODO: For the purpose of reference

// export const PostUnionType = new GraphQLUnionType({
//     name: 'PostUnion',
//     types: [BasicPostType, EmbeddedPostType],
//     resolveType: (post) => {
//         if (!post.servicePlatform) {
//             return BasicPostType;
//         }
//         return EmbeddedPostType;
//     },
// });

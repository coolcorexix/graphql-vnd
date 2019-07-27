import GraphQLEndpoint from './graphql';

export default (app) => {
    app.use('/graphql', GraphQLEndpoint);
};


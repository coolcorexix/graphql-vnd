import {generateCorrespondingInputType} from '~/utils/graphql';
import {SimpleUserType} from 'mapper-gql/types';

export default generateCorrespondingInputType({
    name: 'SimpleUserInput',
    objectType: SimpleUserType,
});

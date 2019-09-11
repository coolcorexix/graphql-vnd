import {createModel} from '~/utils/mongoDb';
import {SimpleUser} from './elementType';

export default createModel(
    'posts', {
        title: String,
        description: String,
        author: SimpleUser,
        servicePlatform: String,
        resourceURL: String,
        comments: [{
            author: SimpleUser,
            content: String,
        }],
    }
);

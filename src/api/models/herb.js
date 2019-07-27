import {createModel} from '~/utils/mongoDb';

export default createModel('Herb', {
    name: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    description: String,
    review: [String],
    available: Number,
    tag: [String],
    flavors: [String],
    effects: [{
        name: String,
        value: Number,
    }],
    stockStatus: {
        type: String,
        enum: ['PREORDER', 'INSTOCK'],
    },
});


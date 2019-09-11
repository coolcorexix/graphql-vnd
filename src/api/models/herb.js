import {createModel} from '~/utils/mongoDb';

export default createModel('herbs', {
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
    thumbnailURL: String,
    stockStatus: {
        type: String,
        enum: ['PREORDER', 'INSTOCK'],
    },
});


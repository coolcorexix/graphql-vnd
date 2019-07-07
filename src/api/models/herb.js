import {createModel, createSchema} from '~/utils/mongoDb';

const StrainSchema = createSchema({
    indica: Number,
    sativa: Number,
    ruderailis: Number,
});

const EffectSchema = createSchema({
    name: String,
    value: Number,
});

export default createModel('Herb', {
    // _id: ObjectIdType,
    name: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    description: String,
    review: [String],
    strain: StrainSchema,
    available: Number,
    tag: [String],
    // linage: [String],
    flavors: [String],
    effects: [EffectSchema],
});


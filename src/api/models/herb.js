import { createModel, createSchema, ObjectIdType } from '~/utils/mongoDb';

const StrainSchema = createSchema({
    indica: Number,
    sativa: Number,
    ruderailis: Number,
})

export default createModel('Herb', {
    _id: ObjectIdType,
    name: String,
    description: String,
    strain: StrainSchema,
    linage: [String],
    flavors: [String],
    effects: [String],
});


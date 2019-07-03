import { mongoose } from '~/db';

export const createSchema = (typeDef) => mongoose.Schema(typeDef);
export const createModel = (name, typeDef) => 
    mongoose.model(name, createSchema(typeDef));

export const ObjectIdType = mongoose.Schema.Types.ObjectId;
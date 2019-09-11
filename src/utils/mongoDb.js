import {mongoose} from '~/db';

export const createSchema = (typeDef) => mongoose.Schema(typeDef);
export const createModel = (name, typeDef) =>
    mongoose.model(name, createSchema(typeDef));

export const ObjectIdType = mongoose.Schema.Types.ObjectId;

export async function simpleCreateDocument({
    collectionModel,
    insertData,
    duplicateCondition,
}) {
    if (
        !!duplicateCondition &&
        await collectionModel.find(duplicateCondition).length !== 0
    ) {
        return ({
            error: {
                statusCode: 400,
                message: 'DUPLICATED',
            },
        });
    }
    return ({
        item: await collectionModel.create(insertData),
    });
};

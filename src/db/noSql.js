import mongoose from 'mongoose';

const {
    DB_NAME,
    MONGODB_PORT,
} = process.env;
const db = mongoose.connection;
mongoose.connect(`mongodb://localhost:${MONGODB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
db.on('open', () => {
    console.log('mongoose made it!');
})

db.on('error', console.error.bind(console, 'mongoose is no more'));

export default mongoose;
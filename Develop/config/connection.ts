import mongoose from 'mongoose';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/threads'); 
        console.log('🌍 Connected to MongoDB');
        return mongoose.connection;
    } catch (err) {
        console.error('🚫 Connection to MongoDB error:', err);
        throw new Error('🚫 Connection to MongoDB failed');
    }

    export default db;
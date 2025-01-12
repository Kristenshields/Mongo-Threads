import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/threads'); 
        console.log('🌍 Connected to MongoDB');
  
    export default mongoose.connection;
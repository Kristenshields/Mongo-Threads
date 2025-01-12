import { Schema, model } from 'mongoose';
// Schema to create Post model
const thoughtSchema = new Schema({
    published: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    buildSuccess: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
        minLength: 4,
        maxLength: 500,
    },
});
// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema
    .virtual('getResponses');
// Initialize our Application model
const Thought = model('thought', thoughtSchema);
export default Thought;

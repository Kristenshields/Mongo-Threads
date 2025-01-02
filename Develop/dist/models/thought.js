import { Schema, model } from 'mongoose';
const reactionSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
const Thought = model('Thought', reactionSchema);
export default Thought;

import mongoose, { Schema } from 'mongoose';

export interface IReaction {
    reactionId: mongoose.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date | string;
    }

    const reactionSchema = new Schema<IReaction>(
        {
            reactionId: {
                type: Schema.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId(),
            },
            reactionBody: {
                type: String,
                required: true,
                maxLength: 280,
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp: number | Date) => new Date(timestamp).toLocaleString(),
            },
        },
        {
            toJSON: {
                getters: true,
            },
            id: false,
        }
    );

    export default reactionSchema;
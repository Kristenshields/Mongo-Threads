import mongoose, { Model, Schema, Document } from 'mongoose';
import reactionSchema, { IReaction } from './reaction.js';


interface IThought extends Document {
  _id: string;
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: IReaction[];
  reactionCount: number;
  __v: number;
}


const thoughtSchema = new Schema<IThought>(
  {
    _id: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
  );
  
thoughtSchema.virtual('reactionCount').get(function(this: IThought) {
  return this.reactions.length;
});


 
const Thought: Model<IThought> = mongoose.model<IThought>('Thought', thoughtSchema);

export default Thought;

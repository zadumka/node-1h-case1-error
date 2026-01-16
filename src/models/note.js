import { model, Schema } from 'mongoose';
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    
    tag: {
      type: String,
      required: false,
      default: 'Todo',
      enum: [...TAGS],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
noteSchema.index({
  title: 'text',
  content: 'text',
});

export const Note = model('Note', noteSchema);

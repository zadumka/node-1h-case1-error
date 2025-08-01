import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
     
      type: Number,
      required: true,
      trim: true,
    },
    content: {
      type: String,
     
      required: true,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      required: false,
      default: 'Todo',
     
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);

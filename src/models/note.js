import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      required: false,
      default: 'Todo',
      
      enum: [
        'work',
        'personal',
        'meeting',
        'shopping',
        'ideas',
        'todo',
      ],
    },
  },
  {
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);

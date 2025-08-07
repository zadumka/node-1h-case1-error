import { model, Schema } from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    default: '',
    trim: true,
  },
  tag: {
    type: String,
    default: 'Todo',
    enum: ['Work', 'Personal', 'Todo'], 
  },
});

export const Note = model('Note', noteSchema);

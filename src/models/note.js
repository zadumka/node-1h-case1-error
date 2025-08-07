import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    
  },
  tag: {
    type: String,
    default: 'Todo',
    enum: [...TAGS],
  },
});

export const Note = model('Note', noteSchema);

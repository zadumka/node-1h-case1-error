import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
   
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre('save', (next) => {
  if (!this.username) {
    this.username = this.email;
  }
  this.avatar = 'https://ac.goit.global/fullstack/react/default-avatar.jpg';
  next();
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = model('User', userSchema);

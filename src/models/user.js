import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
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
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre('save', function (next) {
  if (!this.username) {
    this.username = this.email;
  }
  
  next();
});


userSchema.methods.toJSON = () => {
  return this.toObject(); 
};

export const User = model('User', userSchema);

import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const updateUserAvatar = async (req, res, next) => {
  if (!req.file) {
    return next(createHttpError(400, 'No file'));
  }

  const result = saveFileToCloudinary(req.file.buffer); 

 
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { profilePicture: result.secure_url },
    { new: true },
  );

  res.status(200).json({ url: user.avatar }); 
};

import { Readable } from 'node:stream';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function saveFileToCloudinary(buffer) {
  
  const uploadStream = cloudinary.uploader.upload_stream(
    {
      folder: 'notehub/avatars',
      resource_type: 'image',
      overwrite: true,
      unique_filename: true,
      use_filename: false,
    },
    (err, result) => {
      if (err) {
        throw err; 
      }
      return result; 
    },
  );


  uploadStream(buffer);
}

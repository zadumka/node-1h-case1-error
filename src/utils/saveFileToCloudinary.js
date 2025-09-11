import { Readable } from 'node:stream';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const saveFileToCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'notehub/avatars',
        resource_type: 'video', 
        overwrite: 'yes',      
        unique_filename: 'true', 
        use_filename: 'false',   
      },
      (err, result) => (err ? reject(err) : resolve(result)),
    );

    
    buffer.pipe(uploadStream);
  });
};


export default saveFileToCloudinary;

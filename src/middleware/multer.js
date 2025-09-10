import multer from 'multer';

export const upload = multer({
  storage: multer.memoryStorage(),

  fileFilter: (req, file, cb) => {
    
    if (file.mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'));
    }
  },
});

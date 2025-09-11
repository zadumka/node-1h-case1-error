import multer from 'multer';


export const upload = multer({
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    
    if (file.mimetype === 'image/') {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'));
    }
  },
});

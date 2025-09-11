import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
  
    fileSize: 20,
  },
  
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

export default upload;

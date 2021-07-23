var multer = require("multer");
const multerS3 = require("multer-s3");
const moment = require("moment");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("audio")) {
      cb(null, "uploads/sounds/");
    } else if (file.mimetype.startsWith("image/")) {
      cb(null, "uploads/images/");
    } else {
      cb({ error: "Mime type not supported" });
    }
  },
  filename(req, file, cb) {
    const fileName: string = `${moment().format("DDMMYYYY-HHmmss_SSS")}-${
      file.originalname
    }`;
    cb(null, fileName);
  },
});

module.exports = multer({
  storage: multerStorage,
});

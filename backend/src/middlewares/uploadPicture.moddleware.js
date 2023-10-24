const multer = require('multer');
const path = require('path')

const uploadsFolder = path.resolve(__dirname, '../../uploads');

const configMulter = multer.diskStorage({
  destination: uploadsFolder,
  filename: (request, file, callback) => {
    const filename = file.filename;

    return callback(null, filename)
  }
})

const upload = multer({storage: configMulter})


module.exports = upload;
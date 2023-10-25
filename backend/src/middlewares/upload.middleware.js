const multer = require('multer');
const path = require('path')

const config = multer.diskStorage({
  destination: (request, _file, callback) => {
    const local = '../../uploads' + request.baseUrl
    const destination = path.join(__dirname, local)
    console.log(destination)
    callback(null, destination);
  },
  filename: (_request, file, callback) => {
    const baseName = file.originalname;
    return callback(null, baseName);
  }
})

const upload = multer({ storage: config });

module.exports = upload;

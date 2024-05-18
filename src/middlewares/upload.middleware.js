// const multer = require('multer');
// const path = require('path')

// const config = multer.diskStorage({
//   destination: (request, _file, callback) => {
//     const SplitFullUrl = (request.baseUrl).split('/')
//     const local = '../../uploads' + request.baseUrl
//     const destination = path.join(__dirname, local)
//     callback(null, destination);
//   },
//   filename: (_request, file, callback) => {
//     const baseName = file.originalname;
//     return callback(null, baseName);
//   }
// })

// const upload = multer({ storage: config });

// module.exports = upload;


const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Verifica e cria o diretório de destino, se não existir
const checkAndCreateUploadsFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
}

const config = multer.diskStorage({
  destination: (req, _file, callback) => {
    const SplitFullUrl = (req.baseUrl).split('/')
    const local = path.join(__dirname, '../../uploads/', SplitFullUrl[2]);
    checkAndCreateUploadsFolder(local); // Verifica e cria o diretório de destino
    callback(null, local);
  },
  filename: (_req, file, callback) => {
    const baseName = file.originalname; // Adiciona um timestamp ao nome do arquivo
    callback(null, baseName);
  }
});

const upload = multer({ storage: config });

module.exports = upload;


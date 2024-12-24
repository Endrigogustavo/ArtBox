const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Art = require('../Database/Models/ArtSchema');

// Diretório de upload
const uploadDir = path.join(__dirname, '../Images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Função de criar arte
exports.CreateArt = [
  upload.single('imgArtFile'), 
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

      const { nameArt, descriptionArt, nameAutorArt, idAutor } = req.body;
      const imgArtFile = `../Images/${req.file.filename}`;

      const creatArt = await Art.create({
        nameArt,
        descriptionArt,
        imgArtFile,
        nameAutorArt,
        idAutor,
      });

      res.status(201).json({
        message: 'Arte cadastrada com sucesso',
        arteInfo: creatArt,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao cadastrar arte', error });
    }
  },
];

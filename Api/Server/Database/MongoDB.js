const mongoose = require('mongoose')

const connetionBD = () => {

    const Url = "mongodb://localhost:27017/"

    mongoose.connect(Url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conectado ao MongoDB com sucesso');
        })
        .catch((err) => {
            console.error('Erro ao conectar ao MongoDB', err);
            process.exit(1);
        });
}

module.exports = connetionBD;

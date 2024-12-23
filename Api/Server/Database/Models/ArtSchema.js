const mongoose = require('mongoose')

const ArtSchema = new mongoose.Schema({
    nameArt: { type: String, require: true},
    descriptionArt: { type: String, require: true},
    imgArt: { type: String, require: true},
    nameAutorArt: { type: String, require: true},
    idAutor: { type: String, require: true}
}, { timestamps: true })

module.exports = mongoose.model("Arts", ArtSchema);
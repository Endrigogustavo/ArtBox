const mongoose = require('mongoose')
const Art = require('../../Database/Models/ArtSchema')
exports.GetArts = async (req, res) => {
    
    try {
        const DataArt = await Art.find({idAutor: '1'})
        res.status(201).json({message: "Imagens do perfil", dados: DataArt})
    } catch (error) {
        res.status(500).json({message: "Não achou"})
    }
}
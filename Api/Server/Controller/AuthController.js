const mongoose = require('mongoose')
const User = require('../Database/Models/UserSchema')

exports.login = async (req, res) => {
    try {
        const ExistProfile = await User.findOne({name: "Endrigo"})

        if (!ExistProfile) {
            return res.status(401).json({ message: 'Não existe o perfil' });
        }

        res.status(201).json({ message: 'Perfil achado', user: ExistProfile});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao pesquisar', error });
        console.log(error)
    }
}
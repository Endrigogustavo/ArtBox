const mongoose = require('mongoose')
const User = require('../Database/Models/UserSchema')
const bcrypt = require('bcrypt')


exports.login = async (req, res) => {
    try {
        //Trocar pelo email
        const ExistProfile = await User.findOne({name: "Endrigo"})
        if (!ExistProfile) {
            return res.status(401).json({ message: 'Não existe o perfil' });
        }

        //Pegando a senha e comparando
        const pass = "111"
        const ExistPass = await bcrypt.compare(pass, ExistProfile.password)
        if(!ExistPass){
            return res.status(401).json({ message: 'Email ou senha incorretos' });
        }

        res.status(201).json({ message: 'Perfil achado', user: ExistProfile});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao pesquisar', error });
        console.log(error)
    }
}
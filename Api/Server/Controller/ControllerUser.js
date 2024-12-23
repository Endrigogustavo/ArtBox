const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require('../Database/Models/UserSchema')

exports.createProfile = async (req, res) =>{
    const name = "Endrigo"
    const email = "PrimeiroTesteMongoDB"
    const passwordWithoutHash = "1233"
    const password = await bcrypt.hash(passwordWithoutHash, 10)

    try {
        const newUser = await User.create({name, email, password})
        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
}

exports.updateProfile = async (req, res) =>{
    try {
        const updateUser = await User.updateOne({name: 'Endrigo2'}, {$set: {password: '111'}})
        res.status(201).json({ message: 'Usuário atualizado com sucesso', user: updateUser });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
}

exports.deleteProfile = async (req, res) =>{
    try {
        const DeleteUser = await User.deleteOne({name: 'Endrigo'})
        res.status(201).json({ message: 'Usuário deletado com sucesso'});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
}
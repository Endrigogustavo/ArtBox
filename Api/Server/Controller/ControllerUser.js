const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const multer = require('multer');

const User = require('../Database/Models/UserSchema')


exports.createProfile = async (req, res) => {
    try {
        const { name, email, password } = req.body;
   
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }
        
        const newUser = await User.create({ name, email, password })
        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error});
        console.log(error)
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const updateUser = await User.updateOne({ name: 'Endrigo2' }, { $set: { password: '111' } })
        res.status(201).json({ message: 'Usuário atualizado com sucesso', user: updateUser });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        const DeleteUser = await User.deleteOne({ name: 'Endrigo' })
        res.status(201).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
}
const express = require('express')
const router = express.Router();

const User = require('../Database/Models/Model')

router.get('/', (req, res) => res.send('Hello World!'))

//Rotas de autenticação
router.get('/AuthUser', (req, res) => res.send('Hello World!'))
router.get('/LoginUser', (req, res) => res.send('Hello World!'))

//Rotas de perfil
router.get('/CreateProfile', (req, res) => res.send('Hello World!'))
router.get('/UpdateProfile', (req, res) => res.send('Hello World!'))
router.get('/DeleteProfile', (req, res) => res.send('Hello World!'))

//Rotas de artes
router.get('/CreateArt', async (req, res) => {
    const name = "Endrigo3"
    const email = "PrimeiroTesteMongoDB3"
    const password = "1233"
    try {
        const newUser = await User.create({name, email, password})
        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
})

router.get('/UpdateArt', (req, res) => res.send('Hello World!'))
router.get('/DeleteArt', (req, res) => res.send('Hello World!'))
router.get('/ListArt', async (req, res) => {
    try {
        const list = await User.find()
        res.status(201).json({ user: list });
    } catch (error) {
        
    }
})
router.get('/CreateBook', (req, res) => res.send('Hello World!'))

module.exports = router;
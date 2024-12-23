const express = require('express');
const ControllerUser = require('../Controller/ControllerUser');
const { login } = require('../Controller/AuthController');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'))

//Rotas de autenticação
router.get('/AuthUser', (req, res) => res.send('Hello World!'))
router.get('/LoginUser', login)

//Rotas de perfil
router.get('/CreateProfile', ControllerUser.createProfile)
router.get('/UpdateProfile', ControllerUser.updateProfile)
router.get('/DeleteProfile', ControllerUser.deleteProfile)

//Rotas de artes
router.get('/CreateArt', (req, res) => res.send('Hello World!'))
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
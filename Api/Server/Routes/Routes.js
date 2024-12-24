const express = require('express');
const ControllerUser = require('../Controller/ControllerUser');
const { login } = require('../Controller/AuthController');
const { CreateArt } = require('../Controller/ControllerArt');
const { GetArts } = require('../Shared/Service/ServiceArt');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'))

//Rotas de autenticação
router.get('/AuthUser', (req, res) => res.send('Hello World!'))
router.get('/LoginUser', login)

//Rotas de perfil
router.post('/CreateProfile', ControllerUser.createProfile)
router.get('/UpdateProfile', ControllerUser.updateProfile)
router.get('/DeleteProfile', ControllerUser.deleteProfile)

//Rotas de artes
router.post('/CreateArt', CreateArt)
router.get('/UpdateArt', (req, res) => res.send('Hello World!'))
router.get('/DeleteArt', (req, res) => res.send('Hello World!'))
router.get('/ListArt', GetArts)
router.get('/CreateBook', (req, res) => res.send('Hello World!'))

module.exports = router;
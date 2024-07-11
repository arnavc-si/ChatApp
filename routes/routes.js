const express = require('express');
const router = express.Router();
const controller = require('../controllers/chatController.js');
const auth=require('../middleware/AuthMiddleware.js')
const { message, user } = require('../models');
const sequelize = require('../config/db.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/chat', auth.verifyToken,controller.verifyUser);
router.post('/new', controller.newUser);
router.post('/password', controller.update);
router.post('/delete', controller.delete);
router.post('/chat', controller.authenticate);
router.post('/message/:id',auth.verifyToken, controller.view);
router.get('/user/', auth.verifyToken, controller.updateUserStatus);
router.get('/new', (req, res) => {
    res.render('new');
});
router.get('/password', (req, res) => {
    res.render('password');
});
router.get('/delete', (req, res) => {
    res.render('delete');
});

module.exports = router;

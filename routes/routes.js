const express = require('express');
const router = express.Router();
const controller = require('../controllers/chatController.js');
const auth=require('../middleware/AuthMiddleware.js')

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/new', controller.newUser);
router.post('/password', controller.update);
router.post('/delete', controller.delete);
router.post('/chat', controller.authenticate);
router.post('/message/:id',auth.verifyToken, controller.view);
router.get('/user/', auth.verifyToken, controller.updateUserStatus);
router.get('/new', (req, res) => {
    res.render('new', { user: req.session.user });
});
router.get('/password', (req, res) => {
    res.render('password', { user: req.session.user });
});
router.get('/delete', (req, res) => {
    res.render('delete', { user: req.session.user });
});

module.exports = router;

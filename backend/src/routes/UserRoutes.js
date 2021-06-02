const express = require("express");

const routes = express.Router();
const userController = require('../controllers/UserController');

routes.get('/userHome', userController.userHome);
routes.get('/login', userController.login);
routes.get('/logout', userController.logout);
routes.get('/', userController.home);
routes.get('/register', userController.register);
routes.get('/profile', userController.profile);

routes.post('/login', userController.login);

module.exports = routes;
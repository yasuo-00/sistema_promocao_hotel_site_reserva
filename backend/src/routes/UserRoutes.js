const express = require("express");

const routes = express.Router();
const userController = require('../controllers/UserController');

routes.get('/userHome', userController.userHome);
routes.get('/login', userController.login);
routes.get('/', userController.home);
routes.get('/register', userController.register);
routes.get('/profile', userController.profile);

module.exports = routes;
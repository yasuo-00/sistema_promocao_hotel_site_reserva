const express = require("express");

const routes = express.Router();
const bookingSiteController = require('../controllers/BookingSiteController');

routes.get('/listBookingSite', bookingSiteController.list);
routes.get('/bookingSite/listAll', bookingSiteController.listAll);
routes.get('/addBookingSite', bookingSiteController.create);
routes.post('/bookingSite/getById', bookingSiteController.getBookingSiteById);

routes.post('/bookingSite/register', bookingSiteController.register);

module.exports = routes;
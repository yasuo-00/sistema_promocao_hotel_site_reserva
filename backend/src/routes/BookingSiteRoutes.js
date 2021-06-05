const express = require("express");

const routes = express.Router();
const bookingSiteController = require('../controllers/BookingSiteController');

routes.get('/listBookingSite', bookingSiteController.list);
routes.get('/bookingSite/listAll', bookingSiteController.listAll);
routes.post('/bookingSite/getById', bookingSiteController.getBookingSiteById);

routes.get('/addBookingSite', bookingSiteController.create);
routes.post('/bookingSite/register', bookingSiteController.register);

routes.put('/bookingSite/edit', bookingSiteController.edit);

module.exports = routes;
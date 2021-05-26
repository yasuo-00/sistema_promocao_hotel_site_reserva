const express = require("express");

const routes = express.Router();
const bookingSiteController = require('../controllers/BookingSiteController');

routes.get('/listBookingSite', bookingSiteController.list);
routes.get('/addBookingSite', bookingSiteController.create);

module.exports = routes;
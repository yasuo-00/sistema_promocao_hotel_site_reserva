const express = require("express");

const routes = express.Router();
const bookingSiteController = require('../controllers/BookingSiteController');

routes.get('./listBookingSite', bookingSiteController.list);

module.exports = routes;
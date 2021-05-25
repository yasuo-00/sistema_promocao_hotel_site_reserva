const express = require("express");

const routes = express.Router();
const salesController = require('../controllers/SalesController');

routes.get('/addSales', salesController.addSales);


module.exports= routes;
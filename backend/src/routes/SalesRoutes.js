const express = require("express");

const routes = express.Router();
const salesController = require('../controllers/SalesController');

routes.get('/sales/listAll', salesController.listAll);
routes.get('/sales/listByHotel', salesController.listByHotel);
routes.get('/sales/listByBookingSite', salesController.listByBookingSite);
routes.get('/addSales', salesController.addSales);

routes.post('/addSales', salesController.addSales);

module.exports= routes; 
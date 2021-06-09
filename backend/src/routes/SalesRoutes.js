const express = require("express");

const routes = express.Router();
const salesController = require('../controllers/SalesController');

routes.get('/sales/listAll', salesController.listAll);
routes.get('/sales/listByHotel', salesController.listByHotel);
routes.get('/sales/listByBookingSite', salesController.listByBookingSite);


routes.get('/addSales', salesController.addSales);
routes.post('/addSales', salesController.addSales); 

routes.post('/sales/listByHotel', salesController.listByHotel);
routes.post('/sales/listByBookingSite', salesController.listByBookingSite);
routes.post('/sales/listByFilter', salesController.listByFilter)

module.exports= routes; 
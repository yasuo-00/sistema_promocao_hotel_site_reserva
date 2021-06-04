const express = require("express");

const routes = express.Router();
const hotelController = require('../controllers/HotelController');

routes.get('/hotelList', hotelController.list);
routes.get('/hotel/listAll', hotelController.listAll);
routes.post('/hotel/listByName', hotelController.listByName); 
routes.get('/addHotel', hotelController.create);
routes.post('/hotel/getById', hotelController.getHotelById);

routes.post('/hotel/register', hotelController.register);

routes.put('/hotel/edit', hotelController.edit);

module.exports = routes;
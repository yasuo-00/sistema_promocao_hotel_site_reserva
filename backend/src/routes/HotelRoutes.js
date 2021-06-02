const express = require("express");

const routes = express.Router();
const hotelController = require('../controllers/HotelController');

routes.get('/hotelList', hotelController.list);
routes.get('/hotel/listAll', hotelController.listAll);
routes.get('/addHotel', hotelController.create);

module.exports = routes;
const express = require("express");

const routes = express.Router();
const hotelController = require('../controllers/HotelController');

routes.get('/listHotel', hotelController.list);

module.exports = routes;
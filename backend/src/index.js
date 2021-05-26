const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const userRoutes = require('./routes/UserRoutes');
const salesRoutes = require('./routes/SalesRoutes');
const hotelRoutes = require('./routes/HotelRoutes');
const bookingSiteRoutes = require('./routes/BookingSiteRoutes');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/assets', express.static(path.resolve('../frontend/assets')))

app.use(userRoutes);
app.use(salesRoutes);
app.use(hotelRoutes);
app.use(bookingSiteRoutes);

app.listen(3333);
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const userRoutes = require('./routes/UserRoutes');
const salesRoutes = require('./routes/SalesRoutes');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/assets', express.static(path.resolve('../frontend/assets')))

app.use(userRoutes);
app.use(salesRoutes);

app.listen(3333);
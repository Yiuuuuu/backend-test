import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

import routePromo from './routes/routePromo.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// routes
app.use('/promo', routePromo);

// using mongoDB
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

export default app;
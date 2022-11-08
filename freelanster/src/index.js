import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './Styles/GlobalStyle';
import "swiper/css/bundle";
import Routing from './Routing'

const root = ReactDOM.createRoot(document.getElementById('root'));
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./Routes/payment");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));


root.render(
  <>
    <GlobalStyle />

    <Routing />

  </>

);

const express = require("express");
const hotel_routes = express.Router();

const{ hotel_get, hotel_post, paymentGet } = require("../controller/hotelbooking/hotelbooking");

hotel_routes.get("/api/hotel-get", hotel_get);
hotel_routes.post("/api/hotel-post", hotel_post);

hotel_routes.get("/api/payment-get", paymentGet);

module.exports = { hotel_routes };

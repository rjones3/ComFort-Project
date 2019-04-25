const express = require("express");
const router = express.Router();

// api routes

router.use("/user", require("./api/userRoutes"));
router.use("/payment", require("./api/paymentRoutes"));
router.use("/product", require("./api/productRoutes"));

// add more api here

module.exports = router;


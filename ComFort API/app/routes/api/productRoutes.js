const express = require("express");
const router = express.Router();

// controller here
const ProductsController = require("../../controller/productController");
const productcontroller = new 
ProductsController();

// products routes
router.get("/", function (req, res) {
    // do something
    productcontroller.findAll(res);
});

router.get("/:id", function (req, res) {
    productcontroller.findOne(req, res);
});

router.get("/room/:room", function (req, res) {
    productcontroller.findByRoom(req, res);
});

router.post('/create', function (req, res) {
    productcontroller.create(req, res);
});

router.put('/edit/:id', function (req, res) {
    productcontroller.update(req, res);
});

module.exports = router;
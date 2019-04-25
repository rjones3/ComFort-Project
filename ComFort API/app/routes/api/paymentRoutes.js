const express = require("express");
const router = express.Router();

// controller here
const PaymentController = require("../../controller/paymentController");
const paymentcontroller = new 
PaymentController();

// payments routes
router.get("/", function (req, res) {
    // do something
    paymentcontroller.findAll(res);
});

router.get("/:id", function (req, res) {
    let id = req.params.id;
    paymentcontroller.findOne(req, res);
});

router.get("/fname/:fname", function(req, res) {
    let fname = req.params.fname;
    paymentcontroller.findByName(req, res);
});

router.post('/create', function (req, res) {
    paymentcontroller.create(req, res);
});

router.put('/edit/:id', function (req, res) {
    paymentcontroller.update(req, res);
});

module.exports = router;

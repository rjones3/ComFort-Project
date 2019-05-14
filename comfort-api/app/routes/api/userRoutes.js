const express = require("express");
const router = express.Router();

// controller here
const UsersController = require("../../controller/userController");
const usercontroller = new 
UsersController();

// users routes
router.get("/", function (req, res) {
    // do something
    usercontroller.findAll(res);
});

router.get("/:id", function (req, res) {
    usercontroller.findOne(req, res);
});

router.post('/create', function (req, res) {
    usercontroller.create(req, res);
});

router.put('/edit/:username', function (req, res) {
    usercontroller.update(req, res);
});

module.exports = router;

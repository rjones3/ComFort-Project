const ProductDao = require("../dao/productDao");

const ControllerCommon = require("./common/controllerCommon");
const Product = require("../model/index.js");

class ProductController {
    
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.productDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findOne(req, res) {
        let id = req.params.id;
        this.productDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }

    create(req, res) {
        let product = new Product();
        // console.log(req.body);
        product.id = req.body.id;
        product.productname = req.body.productname;
        product.password = req.body.password;
        product.fname = req.body.fname;
        product.lname = req.body.lname;
        product.dob = req.body.dob;
        product.phone = req.body.phone;
        product.email = req.body.email;

        return this.productDao.create(product)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    update(req, res) {
        let product = new Product();
        product.id = req.body.id;
        product.productname = req.body.productname;
        product.password = req.body.password;
        product.fname = req.body.fname;
        product.lname = req.body.lname;
        product.dob = req.body.dob;
        product.phone = req.body.phone;
        product.email = req.body.email;

        return this.productDao.create(product)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
};

module.exports = ProductController;
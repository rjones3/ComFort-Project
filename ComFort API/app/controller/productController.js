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

    findByRoom(req, res) {
        let room = req.params.room;
        this.productDao.findByRoom(room)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }

    create(req, res) {
        let product = new Product();
        // console.log(req.body);
        product.id = req.body.id;
        product.product_name = req.body.product_name;
        product.price = req.body.price;
        product.product_slug = req.body.product_slug;
        product.product_desc = req.body.product_desc;
        product.room = req.body.room;

        return this.productDao.create(product)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    update(req, res) {
        let product = new Product();
        product.id = req.body.id;
        product.product_name = req.body.product_name;
        product.price = req.body.price;
        product.product_slug = req.body.product_slug;
        product.product_desc = req.body.product_desc;
        product.room = req.body.room;

        return this.productDao.create(product)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
};

module.exports = ProductController;
const PaymentDao = require("../dao/paymentDao");

const ControllerCommon = require("./common/controllerCommon");
const Payment = require("../model/index.js");

class PaymentController {
    
    constructor() {
        this.paymentDao = new PaymentDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.paymentDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findOne(req, res) {
        let id = req.params.id;
        this.paymentDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }

    findByName(req, res) {
        let fname = req.params.fname;
        this.paymentDao.findByName(fname)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }

    create(req, res) {
        let payment = new Payment();
        
        // console.log(req.body);
        payment.id = req.body.id;
        payment.user_id = req.body.user_id;
        payment.card = req.body.card;
        payment.expire = req.body.expire;
        payment.address = req.body.address;
        payment.state = req.body.state;
        payment.zip = req.body.zip;

        return this.paymentDao.create(payment)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    update(req, res) {
        let payment = new Payment();
        payment.id = req.body.id;
        payment.user_id = req.body.user_id;
        payment.card = req.body.card;
        payment.expire = req.body.expire;
        payment.address = req.body.address;
        payment.state = req.body.state;
        payment.zip = req.body.zip;

        return this.paymentDao.create(payment)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
};

module.exports = PaymentController;
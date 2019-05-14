const UserDao = require("../dao/userDao");

const ControllerCommon = require("./common/controllerCommon");
const { User } = require("../model");

class UserController {
    
    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.userDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findOne(req, res) {
        let id = req.params.id;
        this.userDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }

    create(req, res) {
        let user = new User();
        // console.log(req.body);
        user.id = req.body.id;
        user.username = req.body.username;
        user.password = req.body.password;
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.dob = req.body.dob;
        user.phone = req.body.phone;
        user.email = req.body.email;

        return this.userDao.create(user)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    update(req, res) {
        let user = new User();
        user.id = req.body.id;
        user.username = req.body.username;
        user.password = req.body.password;
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.dob = req.body.dob;
        user.phone = req.body.phone;
        user.email = req.body.email;

        return this.userDao.update(user)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
};

module.exports = UserController;
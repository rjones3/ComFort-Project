const { Payment } = require("../model");

const daoCommon = require("./commons/daoCommon");

class PaymentDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        let sqlRequest = "SELECT * FROM Payment";
        return this.common.findAll(sqlRequest).then(rows => {
            let Payments = [];
            for (const row of rows) {
                Payments.push(new Payment (
                        row.id,
                        row.user_id,
                        row.card,
                        row.expire,
                        row.address,
                        row.state,
                        row.zip
                    )
                );
            }
            return Payments;
        });
    }

    findOne(id) {
        let sqlRequest = "SELECT * FROM Payment WHERE id = " + id;
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new Payment (
                        row.id,
                        row.user_id,
                        row.card,
                        row.expire,
                        row.address,
                        row.state,
                        row.zip
                    )
                );
            }
            return Payments;
        });
    }

    findByName(firstName) {
        let sqlRequest = "SELECT * FROM Payment WHERE firstName = '" + firstName + "'";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new Payment (
                        row.id,
                        row.user_id,
                        row.card,
                        row.expire,
                        row.address,
                        row.state,
                        row.zip
                    )
                );
            }
            return Payments;
        });
    }

    create(Payment) {
        let sqlRequest = "INSERT into Payment (fname, lname, dob, phone, email) " + "VALUES ($fname, $lname, $dob, $phone, $email)";

        let sqlParams = {
            $fname: Payments.fname,
            $lname: Payments.lname,
            $dob: Payments.dob,
            $phone: Payments.phone,
            $email: Payments.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(Payment) {
        let sqlRequest = "UPDATE Payment SET Id=$Id, fname=$fname, lname=$lname, dob=$dob, phone=$phone, email=$email";

        let sqlParams = {
            $fname: Payments.fname,
            $lname: Payments.lname,
            $dob: Payments.dob,
            $phone: Payments.phone,
            $email: Payments.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = PaymentDao;

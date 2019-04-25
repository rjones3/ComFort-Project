const { Product } = require("../model/");

const daoCommon = require("./commons/daoCommon");

class ProductDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        let sqlRequest = "SELECT * FROM products";
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                        row.id,
                        row.product_name,
                        row.price,
                        row.product_slug
                    )
                );
            }
            return products;
        });
    }

    findOne(id) {
        let sqlRequest = "SELECT * FROM products WHERE id = " + id;
        
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            
            for (const row of rows) {
                users.push(new Product(
                        row.id,
                        row.product_name,
                        row.price,
                        row.product_slug
                    )
                );
            }
            return users;
        });
    }

    create(Products) {
        let sqlRequest = "INSERT into Products (username, password, fname, lname, dob, phone, email) " + "VALUES ($username, $password, $fname, $lname, $dob, $phone, $email)";

        let sqlParams = {

            $username: Products.username,
            $password: Products.password,
            $fname: Products.fname,
            $lname: Products.lname,
            $dob: Products.dob,
            $phone: Products.phone,
            $email: Products.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(Products) {
        let sqlRequest = "UPDATE Products SET id=$id, fname=$fname, lname=$lname, dob=$dob, phone=$phone, email=$email";

        let sqlParams = {
            $id: Products.id,
            $username: Products.username,
            $password: Products.password,
            $fname: Products.fname,
            $lname: Products.lname,
            $dob: Products.dob,
            $phone: Products.phone,
            $email: Products.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = ProductDao;

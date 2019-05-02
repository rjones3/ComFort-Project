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
                        row.product_slug,
                        row.product_desc,
                        row.room
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
                        row.product_slug,
                        row.product_desc,
                        row.room
                    )
                );
            }
            return users;
        });
    }

    findByRoom(room) {
        let sqlRequest = "SELECT * FROM products WHERE room  = '" + room + "'";
        
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            
            for (const row of rows) {
                users.push(new Product(
                        row.id,
                        row.product_name,
                        row.price,
                        row.product_slug,
                        row.product_desc,
                        row.room
                    )
                );
            }
            return users;
        });
    }

    create(products) {
        let sqlRequest = "INSERT into products (product_name, price, product_slug, product_desc, room) " + "VALUES ($product_name, $price, $product_slug, $product_desc, $room)";

        let sqlParams = {

            $product_name: products.product_name,
            $price: price,
            $product_slug: product_slug,
            $product_desc: product_desc,
            $room: room
            
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(products) {
        let sqlRequest = "UPDATE products SET id=$id, product_name=$product_name, price=$price, product_slug=$product_slug, product_desc=$product_desc, room=$room";

        let sqlParams = {
            $id: products.id,
            $product_name: products.product_name,
            $price: price,
            $product_slug: product_slug,
            $product_desc: product_desc,
            $room: room
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = ProductDao;

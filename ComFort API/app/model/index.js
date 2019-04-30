class User {
    constructor(id, username, password, fname, lname, dob, phone, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
    }
}

class Payments {
    constructor(id, user_id, card, expire, address, state, zip) {
        this.id = id;
        this.user_id = user_id;
        this.card = card;
        this.expire = expire;
        this.address = address;
        this.state = state;
        this.zip = zip;
    }
}

class Product {
    constructor(id, product_name, price, product_slug, product_desc, room) {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
        this.product_slug = product_slug;
        this.product_desc = product_desc;
        this.room = room;
    }
}

module.exports = {
    User: User,
    Payment: Payments,
    Product: Product
}
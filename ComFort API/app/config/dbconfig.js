let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./db/comFort.db");

let init = function() {
    // db.run("CREATE TABLE if not exists Users (" +
    // "id INTEGER PRIMARY KEY," +
    // " Id Integer, " + 
    // " firstName TEXT," +
    // " lastName TEXT," +
    // " gender TEXT, " +
    // " dob TEXT," +
    // " phone TEXT," +
    // " email TEXT" +
    // ")");
}

module.exports = {
    init: init, 
    db: db
}
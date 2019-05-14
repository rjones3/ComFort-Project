const { User } = require("../model");

const daoCommon = require("./commons/daoCommon");

class UserDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        let sqlRequest = "SELECT * FROM Users";
        return this.common.findAll(sqlRequest).then(rows => {
            let Users = [];
            for (const row of rows) {
                Users.push(new User (
                        row.id,
                        row.username,
                        row.password,
                        row.fname,
                        row.lname,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return Users;
        });
    }

    findOne(id) {
        let sqlRequest = "SELECT * FROM Users WHERE id = " + id;
        
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            
            for (const row of rows) {
                users.push(new User (
                        row.id,
                        row.username,
                        row.password,
                        row.fname,
                        row.lname,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return users;
        });
    }

    create(Users) {
        let sqlRequest = "INSERT into Users (username, password, fname, lname, dob, phone, email)" + "VALUES ($username, $password, $fname, $lname, $dob, $phone, $email)";

        let sqlParams = {

            $username: Users.username,
            $password: Users.password,
            $fname: Users.fname,
            $lname: Users.lname,
            $dob: Users.dob,
            $phone: Users.phone,
            $email: Users.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(Users) {
        let sqlRequest = "UPDATE Users SET id=$id, username=$username, password=$password, fname=$fname, lname=$lname, dob=$dob, phone=$phone, email=$email WHERE username=$username";

        let sqlParams = {
            $id: Users.id,
            $username: Users.username,
            $password: Users.password,
            $fname: Users.fname,
            $lname: Users.lname,
            $dob: Users.dob,
            $phone: Users.phone,
            $email: Users.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = UserDao;

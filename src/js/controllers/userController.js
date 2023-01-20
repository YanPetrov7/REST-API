const db = require('../db_config/db_config.js');

class UserController {
    create(req, res){   
        const { password, user_name, first_name, last_name, email, is_staff, is_active } = req.body;

        const query = `INSERT INTO user (password, user_name, first_name, last_name, email, is_staff, is_active, date_join) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const queryName= 'SELECT COUNT(*) AS namesCount FROM user WHERE user_name=?';

        const date_join = new Date();

        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; 

        // Check for nesesery fields
        if (!(password && user_name && first_name && last_name)) {
            const message = 'Password, user_name, first_name, last_name are nesesery fields';
            console.log(message);
            return res
                .status(404)
                .json({message});
        }

        // Validate email
        if (emailRegExp.test(email) !== true) {
            const message = 'This email is not valid email address';
            console.log(message);
            return res
                .status(404)
                .json({message});
        }

        // Validate password
        if (passwordRegExp.test(password) !== true) {
            const message = 'This password should contain at least 8 sumbols, at least 1 number, 1 lover case sumbol and 1 upper case sumbol';
            console.log(message);
            return res
                .status(404)
                .json({message});
        }

        // Check for dublicated user_names
        db.query(queryName, [user_name], (err, result) => {
            const count = result[0].namesCount;
            if(count !== 0) {
                const message = `User with name:[${user_name}] is already existing`;
                console.log(message);
                return res
                    .status(404)
                    .json({message});
            }

            // Create user
            db.query(query, [password, user_name, first_name, last_name, email, is_staff, is_active, date_join], (err) => {
                if(!err){
                    const message = `User with name:[${user_name}] was added`;
                    console.log(message);
                    return res
                        .status(200)
                        .json({message});
                } else {
                    return res
                        .status(500)
                        .json(err);
                }
            });
        });
        
    }

    getAll(req, res){

        // Get data files
        const table = 'user';
        const query = `SELECT *FROM ${table}`;
        
        db.query(query, (err,result) => {
            if(!err){
                const message = 'Users were succsesfuly received';
                console.log(message);
                return res
                    .status(200)
                    .json({message, result});
            } else {
                return res
                    .status(500)
                    .json(err);
            }
        });
    }

    getById(req, res) {
        const id = req.params.id;
        const query = 'SELECT *FROM user WHERE id=?';

        // Get user
        db.query(query, [id], (err,result) => {
            // Check if user exist
            if (result.length === 0) {
                const message = `No user with id:[${id}]`;
                console.log(message);
                return res
                    .status(404)
                    .json({message});
            }
            if(!err){
                const message = `User with id:[${id}] was recieved`;
                console.log(message);
                return res
                    .status(200)
                    .json({message, result});
            } else {
                return res
                    .status(500)
                    .json(err);
            }
        });
    }

    delete(req, res){ 
        const id = req.params.id;
        const query = 'DELETE FROM user WHERE id=?';

        // Deleate user
        db.query(query, [id], (err, result) => {
            // Check if user exist
            if(result.affectedRows === 0) {
                const message = `No user with id:[${id}]`;
                console.log(message);
                return res
                    .status(404)
                    .json({message});
            }
            if(!err){
                const message = `User with id:[${id}] was succsessfuly deleted`;
                console.log(message);
                return res
                    .status(200)
                    .json({message});
            } else {
                return res
                    .status(500)
                    .json(err);
            }
        });
    }

    update(req,res){
        const id = req.params.id; 
        const { password, user_name, first_name, last_name, email } = req.body;
        const query = 'UPDATE user SET password=?, user_name=?, first_name=?, last_name=?, email=? where id=?';

        // Update user
        db.query(query, [password, user_name, first_name, last_name, email, id],(err, result) => {
            // Check if user exist
            if(result.affectedRows === 0) {
                const message = `No user with id:[${id}]`;
                return res
                    .status(404)
                    .json({message});
            }
            if (!err) {
                const message = `User with id:[${id}] succsessfuly updated`;
                console.log(message);
                return res
                    .status(200)
                    .json({message});
            } else {
                return res
                    .status(500)
                    .json(err);
            }
        });
    }
}

module.exports = new UserController();
const db = require('../db_config/db_config.js');

class DataFileController {
    create(req, res){   
        const { created_by_id, user_password, name, description, file_csv, provider, confirmed } = req.body;
        const query = 'INSERT INTO datasetfile (created_by_id, name, description, file_csv, provider, confirmed, date_creation) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const passwordQuery = 'SELECT password FROM user WHERE id=?';
        const date_creation = new Date();

        // Check for nesesery fields
        if (!(name && description && file_csv && provider)) {
            const message = 'Name, description, file_csv, provider are nesesery fields';
            console.log(message);
            return res
                .status(404)
                .json({message});
        }

        // Check password
        db.query(passwordQuery, [created_by_id], (err, result) => {
            const password = result[0].password;
            if(user_password !== password){
                const message = 'Invalid password';
                console.log(message);
                return res
                .status(404)
                .json({message});
            }
        
            // Create data file
            db.query(query, [created_by_id, name, description, file_csv, provider, confirmed, date_creation], (err, result) => {
                if(!err){
                    const message = `Data file with name:[${name}] was added`;
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
        const query = 'SELECT *FROM datasetfile';
        db.query(query, (err,result) => {
            if(!err){
                const message = 'Data files were succsesfuly received';
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
        const query = 'SELECT *FROM datasetfile WHERE id=?';

        // Get data file
        db.query(query, [id], (err,result) => {
            // Check if data file exist
            if (result.length === 0) {
                const message = `No data file with id:[${id}]`;
                console.log(message);
                return res
                    .status(404)
                    .json({message});
            }
            if(!err){
                const message = `Data file with id:[${id}] was recieved`;
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
        const query = 'DELETE FROM datasetfile WHERE id=?';

        // Deleate data file
        db.query(query, [id], (err, result) => {
            // Check if data file exist
            if(result.affectedRows === 0) {
                const message = `No data file with id:[${id}]`;
                console.log(message);
                return res
                    .status(404)
                    .json({message});
            }
            if(!err){
                const message = `Data file with id:[${id}] was succsessfuly deleted`;
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
        const { name, description, file_csv, provider, confirmed } = req.body;
        const query = 'UPDATE datasetfile SET name=?, description=?, file_csv=?, provider=?, confirmed=? where id=?';

        // Update data file
        db.query(query, [name, description, file_csv, provider, confirmed, id],(err, result) => {
            // Check if data file exist
            if(result.affectedRows === 0) {
                const message = `No data file with id:[${id}]`;
                return res
                    .status(404)
                    .json({message});
            }
            if (!err) {
                const message = `Data file with id:[${id}] succsessfuly updated`;
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

module.exports = new DataFileController();
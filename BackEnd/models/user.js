const connection =require('../database/index')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getAll = (callback) => {
    const query = 'SELECT * FROM user ';
    connection.query(query, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });

}
const getUser = (emailTerm, callback) => {
    const query = 'SELECT * FROM user WHERE email = ?';
    connection.query(query, [emailTerm], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const login = async (email, password, callback) => {
    try {
          getUser(email, (err, user) => {
                if (err) {
                      return callback(err, false);
                }

                if (!user || user.length === 0) {
                      // User not found
                      return callback(null, false);
                }

                // Compare the entered password with the hashed password from the database
                bcrypt.compare(password, user[0].password, (compareErr, passwordMatch) => {
                      if (compareErr) {
                            return callback(compareErr, false);
                      }

                      if (passwordMatch) {
                            // Passwords match, login successful
                            return callback(null, user);
                      } else {
                            // Passwords do not match
                            return callback(null, false);
                      }
                });
          });
    } catch (error) {
          return callback(error, false);
    }
};
  const register = async (user, callback) => {
    try {
        const { firstName, lastName, email, birth, password } = user;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        console.log("Attempting to register user:", user);

        const connectionPromise = require('../database/index');

        await connectionPromise.promise().query(
            'INSERT INTO `user` set firstName=?,lastName=?, email=?, birth=?, password=?',
            [firstName, lastName, email, birth,password],(err)=>{
                if(err){throw err;}
                else {console.log("User registered successfully");
        callback(null, 'Registration successful');}
            }
        );

        
    } catch (error) {
        console.error(error);
        callback(error, null);
    }
};
module.exports = { getAll,getUser,login,register };
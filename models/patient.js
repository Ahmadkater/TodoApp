const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userschema.pre('save', function (next) {

    if(!this.isModified('password'))
    {
        return next();
    }
    //generate salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(erro);
        }
        //use salt to hash password
        bcrypt.hash(this.password, salt, (err , hash) => {

            if (err) {
                return next(erro);
            }
            this.password = hash;
            next();

        });
    });
});

userschema.methods.isPasswordMatch = function(plainPassword, hashed, callback) {
    bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
      if (err) {
        return callback(err);
      }
      callback(null, isMatch);
    });
  }

const Patient = mongoose.model('user', userschema)
module.exports = Patient;

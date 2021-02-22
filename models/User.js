const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        // require: true
        //   default:"user" 
    },
    last_name: {
        type: String,
        // require: true
        // default:"user" 
    },
    email: {
        type: String,
        minlength: 6,
        // require: true
    },
    pass: {
        type: String,
        minlength: 6,
        // require: true
    }
})
module.exports = mongoose.model('User', userSchema);
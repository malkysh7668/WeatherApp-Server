const mongoose = require('mongoose')
const historySchema = mongoose.Schema({
    dateTime: {
        type: Date,
        // require: true
        //   default:"user" 
    },
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        type:String,
        ref:'User'
        // require: true
        // default:"user" 
    },
    cityName: {
        type: String,
        minlength: 2,
        // require: true
    },   
    description: {
        type: String,
        // minlength: 2,
        // require: true
    },
    country: {
        type: String,
        // minlength: 2,
        // require: true
    },
    temp: {
        type: String,
        // minlength: 2,
        // require: true
    }

})
module.exports = mongoose.model('History', historySchema);
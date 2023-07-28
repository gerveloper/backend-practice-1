const {Schema, Types, model} = require('mongoose')

let Phone = new Schema({

    countryCode : {
        type: String,
        required : true
    },

    areaCode : {
        type : String,
        required : true
    },

    number : {
        type : String,
        required : true
    },

    userId : {
        type : Types.ObjectId,
        ref : 'User'
    }

})

module.exports = model('Phone', Phone)
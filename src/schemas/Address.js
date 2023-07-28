const {Schema, Types, model} = require('mongoose')

let Address = new Schema({

    country : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    street : {
        type : String,
        required : true
    },

    zipCode : {
        type : String,
        required : true
    },

    userId : {
        type : Types.ObjectId,
        ref : 'User'
    }
})

module.exports = model('Address', Address)
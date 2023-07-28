const {Schema, Types, model} = require('mongoose')
const md5 = require('md5')

let User = new Schema({
    
    email : {
        type : String,
        required : true
    },
    
    password : {
        type : String,
        required : true
    },
    
    registrationDate : {
        type : Date,
        default : Date.now
    },
    
    confirmationDate : Date,

    confirmationToken : {
        type : String,
        // required : true,
        default : function () {

            return md5(Date.now())
        }
    }
})


module.exports = model('User', User)
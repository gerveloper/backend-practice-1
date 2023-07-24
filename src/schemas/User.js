const {Schema, Types, model} = require('mongoose')
const md5 = require('md5')

let User = new Schema({
    
    _id : Types.ObjectId, 

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

            let token = md5(Date.now())

            return token
        }
    }
})


module.exports = model('User', User)
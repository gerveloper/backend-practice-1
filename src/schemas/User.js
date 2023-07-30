const {Schema, model} = require('mongoose')
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


//Static
User.statics.findByToken = function (token) {
    return this.findOne({confirmationToken : token})
}

//Instance
User.methods.findByEmail = function (cb) {
    return model('User').find({ email : this.email }, cb)
}


module.exports = model('User', User)
const {Schema, model} = require('mongoose')

let Images = new Schema({

    url : {
        type : String,
        required : true
    }

})

module.exports = model('Images', Images)
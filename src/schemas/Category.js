const {Schema, Types, model} = require('mongoose')

let Category = new Schema({

    name : {
        type: String,
        required : true,
        unique : true
    },

    categoryId : {
        type : Types.ObjectId,
        ref : 'Category'
    }

})


module.exports = model('Category', Category)
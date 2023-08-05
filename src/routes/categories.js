const router = require('express').Router()
const Category = require('../schemas/Category')


router.get('/', function (req, res) {

    Category
        .find()
        .exec()
        .then(function (categories) {
            res.send(categories)
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.get('/:id', function (req, res) {
    
    Category
        .findById(req.params.id)
        .then(function (category) {
            res.send(category)
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.post('/', function (req, res) {

    let category = new Category(req.body)

    category
        .save()
        .then(function (category) {
            res.send({message : category._id})
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })  
})


router.patch('/:id', function (req, res) {

    Category
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.send({message : "updated"})
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.delete('/:id', function (req, res) {

    Category
        .deleteOne({_id : req.params.id})
        .then(function () {
            res.send({message : "category deleted"})
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})

module.exports = router
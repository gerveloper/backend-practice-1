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
            res.send({message : err.message})
        })
})


router.get('/:id', function (req, res) {
    
    Category
        .findById(req.params.id)
        .then(function (category) {
            res.send(category)
        })
        .catch(function (err) {
            res.send({message : err.message})
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
            res.send({message : err.message})
        })  
})


router.patch('/:id', function (req, res) {

    Category
        .findByIdAndUpdate(req.params.id, {})
        .then(function () {
            res.send()
        })
        .catch(function (err) {
            res.send({message : err.message})
        })
})


router.delete('/:id', function (req, res) {

    Category
        .deleteOne(req.params.id)
        .then(function () {
            res.send({message : "category deleted"})
        })
        .catch(function () {
            res.send({message : "error"})
        })
})

module.exports = router
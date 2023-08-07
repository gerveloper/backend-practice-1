const router = require('express').Router()
const Phone = require('../schemas/Phone')


router.get('/', function () {

    Phone
        .find()
        .exec()
        .then(function (phones) {
            res.send(phones)
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : 'error'})
        })
})


router.get('/:id', function (req, res) {

    Phone
        .findById(req.params.id)
        .then(function (phone) {
            res.send(phone)
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : 'error'})
        })

})


router.post('/', function (req, res) {

})


router.patch('/:id', function (req, res) {

})


router.delete('/:id', function (req, res) {

})
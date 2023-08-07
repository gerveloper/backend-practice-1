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
            res.send({message : "error"})
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
            res.send({message : "error"})
        })

})


router.post('/', function (req, res) {

    let phone = new Phone(req.body)

    phone
        .save()
        .then(function (phone) {
            res.send({message : phone._id})
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.patch('/:id', function (req, res) {

    Phone
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.send({message : "phone updated"})
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.delete('/:id', function (req, res) {

    Phone
    .deleteOne({_id : req.params.id})
    .then(function () {
        res.send({message : "phone deleted"})
    })
    .catch(function (err) {
        console.log(err)
        res.send({message : "error"})
    })
})

module.exports = router
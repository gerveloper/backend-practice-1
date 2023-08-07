const router = require('express').Router()
const Address = require('../schemas/Address')


router.get('/', function (req, res) {

    Address
        .find()
        .exec()
        .then(function (addresses) {
            res.send(addresses)
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.get('/:id', function (req, res) {

    Address
        .findById(req.params.id)
        .then(function (address) {
            res.send(address)
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})

router.post('/', function (req, res) {

    let address = new Address(req.body)

    address
        .save()
        .then(function (address) {
            res.send({message : address._id})
        })
        .catch(function (err) {
            console.log(err)
            res.send({message : "error"})
        })
})


router.patch('/:id', function (req, res) {

    Address
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

})



module.exports = router
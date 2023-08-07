const router = require('express').Router()
const Addresses = require('../schemas/Address')


router.get('/', function (req, res) {

    Addresses
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

    Addresses
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

})


router.patch('/:id', function (req, res) {

})


router.delete('/:id', function (req, res) {

})



module.exports = router
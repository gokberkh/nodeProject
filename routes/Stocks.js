
const express = require('express')

var bodyParser = require('body-parser');

const stocks = express.Router()

var Stock = require('../models/Stock');


stocks.use(bodyParser.urlencoded({ extended: false }))

stocks.use(bodyParser.json())


stocks.get('/stocks', (req, res) => {
    Stock.find({},{_id:0}, (err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({
                code: 0,
                msg: 'Success',
                data: [items]
            });
        }
    });
});


// Uploading the image
stocks.post('/stocks', (req, res) => {
   

    var obj = {
        product_id: req.body.product_id,
        name: req.body.name,
        stock: req.body.stock,
        created_date: req.body.created_date,
    }
    console.log(obj)

    Stock.create(obj).then(result => {
        console.log(result);
        res.json({
            code: 0,
            msg: 'Success',
            data: [obj]
        })
    }).catch(err => {
        res.json({
            status: 404
        })
    })
});

















module.exports = stocks
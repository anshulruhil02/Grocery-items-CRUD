const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmstand', { useNewUrlParser: true })
    .then(() => {
        console.log("Mongo connection open")
    })
    .catch(err => {
        console.log("OH NO Mongo connection ERROR!!")
        console.log(err)
    })


const seedProducts = [

    {
        name: 'apple',
        price: 2.99,
        category: 'fruit'

    },
    {
        name: 'Rice',
        price: 1.8,
        category: 'dairy'

    },
    {
        name: 'Rugby Grapefruit',
        price: 1.99,
        category: 'fruit'

    },
    {
        name: 'sspinach',
        price: 6.99,
        category: 'vegetable'

    },

]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
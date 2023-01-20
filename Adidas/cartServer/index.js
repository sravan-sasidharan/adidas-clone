const express= require('express');

const cors= require('cors');
const { default: mongoose } = require('mongoose');
const dataService= require('./services/dataService')

const app = express();

app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000,()=>{
    console.log('server started at port 3000');
})

app.use(express.json());

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})




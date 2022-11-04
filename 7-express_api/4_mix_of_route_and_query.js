const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/', (req, res)=>{  
const {search, limit} = req.query
const newProducts = products.map((product) => {     // newProducts is set to be equal to an array having objects. Each object contains Id, name and image of a product
    const {id, name, image} = product
    return {id, name, image}
})

let sortedProducts = [...newProducts]      // sortedProducts is set to be equal to objects of newProducts , and enclosed in square brackets.

if(search){
    sortedProducts = sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })
}

if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
}

if(sortedProducts.length<1){
    return res.status(200).json({success: true , data: []})
}

    res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....');
})
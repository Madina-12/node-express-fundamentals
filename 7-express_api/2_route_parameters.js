const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
    res.end('<h1>Home Page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=>{          // While showing list of products, we donot want to show description of each product. 
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

// app.get('/api/products/:productID', (req, res)=>{       // Here productID is may be a route paramter.
//     console.log(req)        // req is giant object
//     console.log(req.params);        // if a user requests  localhost:5000/api/products/100  then 100 would be set equal to productID. If we run this code, we can see in console that req.params is an object. as  { productID: '8' }   if we go to localhost:5000/api/products/8     then productID would be set as '8'  but it is a string. and actually, it is number. So we will have to convert that string into a number.
//     const singleProduct = products.find((product) => product.id === 1) 
//     res.json(singleProduct)
// })

app.get('/api/products/:productID', (req, res)=>{

    const {productID} = req.params;     // As we have seen above that req.params is an object. in which productID and other parameters, that we declare are present. by destructuring, we have taken the value of productID from req.params
    const singleProduct = products.find((product) => product.id === Number(productID))  // As productID in req.params was converted into string. Hence here, it is converted into number. 
    if(!singleProduct){     // If user enters   localhost:5000/api/products/100  then, as there is no product having id of 100. then singleProduct doesnot exist. 
        return res.status(404).send('Product does not exist')   // If singleProducts doesnot exist, then 404 would appear.
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewsID', (req, res)=>{        // This may be an example of complex route paramters 

    console.log(req.params)
    res.send('How was I typing')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....');
})
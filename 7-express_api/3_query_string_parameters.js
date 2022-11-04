// Query string parameters are also called url parameters.
// This is a way for us to send small amounts of information to server using url
// This information is usually used as parameters for e.g. query database or filter results.
// This is up to the people who are setting up the server that what parameters are going to be accepted. and what functionality will depend on those values.

// Instead of grabbing the whole thing, only show the results that match with given term.

// We can reference to algolia api website  https://hn.algolia.com/api

// https://hn.algolia.com/api/v1/search?query=foo&tags=story
// In above , url is only up to search. and after that , there are query string parameters.

const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
    res.end('<h1>Home Page</h1> <a href="/api/products">products</a>')
})

// app.get('/api/products', (req, res)=>{          
//     const newProducts = products.map((product) => {
//         const {id, name, image} = product
//         return {id, name, image}
//     })
//     res.json(newProducts)
// })

// Normally query is not written separately. It is written , where we are getting a list. in above commented code, that we written in route_parameters. we have written them collecively in 4_mix_of_route_and_query.js  file.

app.get('/api/products', (req, res)=>{      
    console.log(req.query)          // If we go to localhost:5000/api/products?name=friday&id=2     then    { name: 'friday', id: '2' }     would be shown in terminal.
    const {search, limit} = req.query       // As req.query is an object. By destructuring, we have taken value of search and limit from this object.
    let sortedProducts = [...products]      // Here we have used    let     because the value of sortedProducts will be modified. if user donot enter any query string parameter    in URL bar, then both of the    if conditions   written below, will be false    and all products will be shown.

if(search){
    sortedProducts = sortedProducts.filter((product)=>{
        return product.name.startsWith(search)      // value of search has been taken by destructuring. Hence such products will be shown, whose name starts with that value.
    })
}

if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))     // If limit is set as 3, then maximum 3 products would be shown.
}

if(sortedProducts.length<1){        // search is set as    typing     then any name will not match with that and empty array will be shown. hence if sortedProducts is zero then this condition will be
    // res.status(200).send('no products matched your search') 
    return res.status(200).json({success: true , data: []})        // We can also pass string shown above, but it is common approach.
    // There is response in above line. Thus we have to write return. otherwise javascript will not stop reading code and move to read next lines. In below line, there is another response. Hence error will be shown in server (here in terminal) if two responses in one request. and it would not be able to set headers.
}

    res.status(200).json(sortedProducts)        // Here return is not written. because it is last response. Hence it would be better practice to not write return here.
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....');
})
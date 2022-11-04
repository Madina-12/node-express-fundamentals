const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))     // Static assets are files, that server does not have to change. We can dump the static files(css,svg,js) in folder naming  pulbic  (any name, but common convention is public) .

// If we dump static files(css, svg, js) in public folder. then how to tackle index.html file. there are two methods. First is that we write the below commented code. and the second is that we dump   index.html  in same public folder with other static files.

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....')
})
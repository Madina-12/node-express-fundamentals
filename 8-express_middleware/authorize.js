const authorize = (req, res, next) => {         //If query string parameters are provided, with user as key     and brother as value     ,then the condition will be satisfied. 
    const {user} = req.query
    if(user === 'brother'){ 
        req.user = {name: 'brother', id: 5}
        next()      // As we learned, if condition is satisfied, then next()    will run, and response in browser would be that, which is sent for routes.
    }
    else{
        res.status(401).send('Unauthorized')        // Here res.send is written instead of next() . hence if       if condition is false, then     responses   set for routes will not work in browser. And unauthorized will be shown.
    } 
}

module.exports = authorize
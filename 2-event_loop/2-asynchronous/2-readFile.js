const {readFile} = require('fs')
console.log('first task');
readFile('./for_Reading.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result)
    console.log('second task')
})
console.log('third task')
// ReadFile is event loop and readFileSync is not.
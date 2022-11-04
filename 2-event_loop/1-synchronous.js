// javascript reads things line by line so it is synchronous

console.log('first task');
console.time()
for (let i = 0; i<10000000; i++) {
    const h3 = document.querySelector('h3')
    h3.textContent = `How am i typing?`
}
console.timeEnd()

console.log('End task')

// for loop may take some seconds to complete and then End task would be shown in console.
// so that for loop is blocking code. how to offload a code. so it would not stop the execution of next code.

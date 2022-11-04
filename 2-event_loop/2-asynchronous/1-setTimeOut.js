console.log('first task')
setTimeout(() => {
    console.log('second task')
}, 0);
console.log('third task');

// Here third task would be shown in console and then second task would be shown
// Event loop is asynchronous. Above code is its example.
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`name is ${name} and id is ${id}`);
})

customEmitter.on('response', ()=>{
    console.log(`another data received`);
})

customEmitter.emit('response', 'umar', 20)

// Here  .on  is for listening event and  .emit  is for  emitting or calling an event.
// Many built in modules are using events.

// Below is example of http using events

// const http = require('http')

// const server = http.createServer()
// server.on('request', (req, res) => {     This callback function will be envoked everytime, if someone visits our server(then event is emitted behind the scenes)
//     res.end('Welcome')
// })

// server.listen(5000)
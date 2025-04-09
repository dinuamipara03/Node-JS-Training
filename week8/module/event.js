// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//    console.log('listner1 executed.');
// }

// // listener #2
// var listner2 = function listner2() {
//    console.log('listner2 executed.');
// }

// eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// // Fire the connection event 
// eventEmitter.emit('connection');


const events = require('events');

const myEmitter = new events.EventEmitter();
// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
myEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
myEmitter.on('connection', listner2);

// Fire the connection event 
myEmitter.emit('connection');
console.log("Number of Listeners:" + myEmitter.listenerCount('connection'));
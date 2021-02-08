const myData = require('./myData.js');
const Polygon = require('./Polygon.js');
const _ = require('underscore'); //looks into two different places for things with this name
const http = require('http');

console.log('hello world');

//ES6 ARROW FUNCTION
// type NAME = (PARAMETERS) =>(arrow) { ELEMENTS }
const helloFunction = () => {
    console.log('hello function');
}

helloFunction();
myData.getMessage();

const myPolygon = new Polygon(10,15);
console.dir(myPolygon.height);

const myArray = [1,2,3,4,5];
const found = _.contains(myArray,3);
console.log(found);

//CREATING A SERVER CHECKLIST
//STEP 1: CREATING A PORT
const port = process.env.PORT || process.env.NODE_PORT || 3000;
//the port is the mailbox 
//process.env.PORT > enviornment variable that will contain the port numbe
// or it will set the NODE_PORT
//and if neither work it will default to port 3000

//STEP 2: REQUEST HANDLER
const onRequest = (request, response) => {
    //request is an object that takes in everything the user is asking for
    if(request.url === '/favicon.ico'){
        console.log('favicon request');
    }

    //response is what we are returning to the user
    //HEADER: metadata and how big the data is 
    //BODY: all the data relevant to the user
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('request recieved');

    //message that the user gets
    response.write(myData.getMessage());
    response.end();
}

http.createServer(onRequest).listen(port);
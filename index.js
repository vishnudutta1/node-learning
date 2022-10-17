// const app = require('./app')
// const http = require('http');
// const fs = require('fs'); // creating file sysytem --> for this we have to import file system 'fs'
// const data = require('./data') // we imported the data in index.js
// const colors = require('colors');
// console.log('package'.red)
// console.log('package'.blue)

// fs.writeFileSync('hello.js','code step by step') //hello.js file will be created 

// // To create static api

// http.createServer((req,resp)=>{
//     resp.writeHead(400,{'content-Type':'application\json'}); // writeHead is used to define the head of api or information about api
//                                                             // like status code and content type .It takes two parameter 
//     resp.write(JSON.stringify(data)) //json.stringify will convert all the data into json
//     resp.end();

// }).listen(5000)

// // listen is used to add port to server where it will run




// console.log(app.z())

                    // Express Code

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("welcome this is home page")
})

app.get('/about',(req,res)=>{
    res.send("welcome this is about page")
})

app.get('/help',(req,res)=>{
    res.send("welcome this is help page")
})

app.listen(5000)



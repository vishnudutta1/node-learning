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




  // -------------------------------------------------------------------------------------------------------------------------
                    // Express Code

const express = require('express');
const app = express();
const Path = require('path')  //require('path') imports path directory library
const publicPath = Path.join(__dirname,'Public') //path.join is used to provide path to current folder
console.log(__dirname)  //__dirname is used to find out the path of the current project
// console.log(publicPath)

app.use(express.static(publicPath))


app.get('',(req,res)=>{
    
    res.send("welcome this is home page")  // go to home page

   console.log(req.query)  // req.query.name in this req.query is used to accept data as parames at backend. 
    
    // if(req.query.name=='vishnu'){
    //     res.send("welcome to my node js program")
    // }


    // we can also show params data at page


})

app.get('/about',(req,res)=>{
    res.send("welcome this is about page")  // res.send is used to send data to about page 
})

app.get('/help',(req,res)=>{
    res.send("welcome this is help page")   //go to help page
})

app.listen(5000)


//---------------------------Now to send html file and without extension--------------------------------------------------------------------------



app.get('/about',(req,res)=>{
    res.sendFile("welcome this is about page")  // res.send is used to send data to about page 
})
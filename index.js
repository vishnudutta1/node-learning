const app = require('./app')
const fs = require('fs'); // creating file sysytem --> for this we have to import file system 'fs'
const colors = require('colors');
console.log('package'.red)
console.log('package'.blue)

fs.writeFileSync('hello.js','code step by step') //hello.js file will be created 



console.log(app.z())


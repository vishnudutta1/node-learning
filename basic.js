const http = require('http');

const test = (req,resp)=>{
resp.write("<h1>hii</h1>");
resp.end();
}

http.createServer(test).listen(4500);
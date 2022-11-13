const http = require('http');
const fs = require('fs')


const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        const data = fs.readFileSync('home.html','utf8');
        res.end(data);
    }
    else if(req.url=='/about'){
        const data = fs.readFileSync('about.html','utf8');
        res.end(data)
    }
    else if(req.url=='/about'){
        const data = fs.readFileSync('about.html','utf8');
        res.end(data)
    }
    else if(req.url=='/service'){
        const data = fs.readFileSync('service.html','utf8');
        res.end(data)
    }
    else if(req.url=='/product'){
        const data = fs.readFileSync('product.html','utf8');
        res.end(data)
    }
    else if(req.url=='/contact'){
        const data = fs.readFileSync('contact.html','utf8');
        res.end(data)
    }
    else if(req.url=='/registration'){
        const data = fs.readFileSync('registration.html','utf8');
        res.end(data)
    }
    else if(req.url=='/login'){
        const data = fs.readFileSync('login.html','utf8');
        res.end(data)
    }
    else{
        const data = fs.readFileSync('error.html','utf8');
        res.end(data)
    }

});

server.listen(4000);
console.log(`Server is runing at http://localhost:4000`)
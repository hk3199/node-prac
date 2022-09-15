const http= require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('welcome the client')
    }
    else{
        res.end(
            `
            <h1>Page doesn't exist</h1>
            `
        )
    }
    
  
})

server.listen(5000)
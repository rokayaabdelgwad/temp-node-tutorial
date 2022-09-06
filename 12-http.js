const http= require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to  our the page ')
}
    if(req.url==='/about'){
        res.end('here is the short history ')
    }
    res.end(`
    <h1>oops!<h2>
    <p>we cant seem to find the page you are looking for </p>
    <a herf="/">back home</a>`)
    })
    

server.listen(5000)
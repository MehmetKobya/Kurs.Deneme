const http = require ("http");

const requestListener = function (req,res){
    console.log(req)
    res.writeHead(200);
    res.end("Hello world's");
}
const server = http.createServer(requestListener);
server.listen(8080);
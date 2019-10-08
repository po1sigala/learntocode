const http= require("http");
var PORT= 8080;
const server= http.createServer(handleRequest);
const fs= require("fs");
function handleRequest(req, res){
    if (req.url==="/food"){
    fs.readFile(__dirname + "/index.html",function(err,data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    })
  
   }  
   else{
        res.end("bad request! hit path: " +req.url)
    }
}
server.listen(PORT, function(){
    console.log("server is listenign on PORT: " +PORT);
})
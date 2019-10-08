const http= require("http");
const PORT=8800;
const PORT2=8000;
const server= http.createServer(handleRequest);
const server2= http.createServer(handleRequest2);
function handleRequest(request, response){
    response.end("its working! we hit path: "+request.url);

}
function handleRequest2(request, response){
    response.end("its working! we hit path: "+request.url);

}
server.listen(PORT,function(){
    console.log("server is listening on http:localhost:"+PORT);
})
server2.listen(PORT2,function(){
    console.log("server is listening on http:localhost"+PORT2);
})

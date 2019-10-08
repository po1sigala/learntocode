var fs= require("fs")
fs.readFile("best_things_ever.txt","UTF-8",function(err, data){
    if(err){
        return console.log(err);
    }
    console.log(data);
    var dataArr= data.split(",");
    console.log(dataArr);
    for(key in dataArr){
        console.log
    }
})
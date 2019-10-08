var inquirer=require("inquirer");

function Player(name,position,offense,defense,goodGame,badGame,printStats){
    this.name=name,
    this.position=position,
    this.offense=offense,
    this.defense=defense,
    this.goodGame=function(){
        var flip= coinFlip();
        if(flip>0){
            if(offense===10){
                return ("offense is maxed out")
            }
            offense++;
        }else{
            if(defense===10){
                return ("defense is maxed out")
            }
            defense++;
        }
        
    }
    this.badGame=function(){
        var flip= coinFlip();
        if(flip>0){
            if(offense===1){
                return ("offense is bottomed out")
            }
            offense--;
        }else{
            if(defense===1){
                return ("defense is bottomed out")
            }
            defense--;
        }
        
    }
    this.printStats=function(){
        console.log("name:"+this.name+"\nposition: "+this.position+"\nOffense:"+this.offense+
        "\ndefense: "+this.defense);
    }
};
function coinFlip(){
   Math.floor(Math.random()+.5)
}
var count=0;
var starter=[];
var sub=[];

var createPlayer=function(){
    if (count===3){
        return ("your roster is full");

    }else{
        if(starter.length===1){
        inquirer.prompt([
            {
                name: "name",
                message: "What is your players name?"
              }, {
                name: "position",
                message: "What is your player's position?"
              }, {
                name: "defense",
                message: "set your player's defense from 1-10"
              }, {
                name: "offense",
                message: "set your player's offense from 1-10"
              }
        ])}
    }
    count++
}   
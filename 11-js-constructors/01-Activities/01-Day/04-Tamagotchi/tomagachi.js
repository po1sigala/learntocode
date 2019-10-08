function DigitalPal(hungry, sleepy, bored, age,){
    this.hungry=hungry;
    this.sleepy=sleepy;
    this.bored=bored;
    this.age=age;
this.feed = function(){
    if(this.hungry===true){
        console.log("that was yummy")
        this.hungry=== false;
        this.sleepy===true;
    }else{
        console.log("No thanks! I'm full")
    }
}
} 
this.sleep= function(){
    if(this.sleepy===true){
        console.log("Zzzzzzz")
        this.sleepy===false;
        this.bored===true;
        increaseAge();
    }else{
        console.log("No way I'm not tired");
    }
}
this.play=function(){
    if(bored===true){
        console.log("Yay! Let's play3 ")
    }
}

var toma1= new DigitalPal()
function Zfighter(name,race,allegiance,strength,age,hitPoints){
    this.name =name;
    this.race=race;
    this.allegiance=allegiance;
    this.strength=strength;
    this.age=age;
    this.hitPoints=hitPoints;
    this.printStats=function(){
        console.log(this.name);
        console.log(this.race);
        console.log(this.allegiance);
        console.log(this.strength);
        console.log(this.age);
        console.log(this.hitPoints);
    };
}

var goku= new Zfighter("Goku","Sayain","Good",9002,42,36003);
var vegeta= new Zfighter("Vegeta","Sayain","Good",9001,45,36008);
goku.printStats();

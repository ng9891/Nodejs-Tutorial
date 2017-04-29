function User(){
	this.name = "test";
	this.life = 100;
	this.givelife = function givelife(targetPlayer){
		targetPlayer.life +=1;
		console.log(this.name + " gave 1 life to player " + targetPlayer.name);
	}	
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.givelife(Wendy);

console.log("Bucky Life: " + Bucky.life);
console.log("Wendy Life: " + Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -=3;
	console.log(this.name + " JUST Uppercut " + targetPlayer.name);
};
Wendy.uppercut(Bucky);

console.log("Bucky Life: " + Bucky.life);
console.log("Wendy Life: " + Wendy.life);

User.prototype.magic = 60;
console.log("Bucky Magic: " + Bucky.magic);
console.log("Wendy Magic: " + Wendy.magic);

//Assigning new variable to the function with only "." Not declared before
Bucky.luck = 10;
console.log("Bucky Luck: " + Bucky.luck);

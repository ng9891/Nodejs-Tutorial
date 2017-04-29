/*
function printAvatar(){
	console.log ("PG 13");
}


function printTexas(){
	console.log ("PG R");
}

module.exports.avatar = printAvatar;
*/
//OR

//Export all in module.exports instead of one by one as above
module.exports = {
	printAvatar: function(){
		console.log("PG13");
	}, //note the comma
	printTexas: function(){
		console.log("PG R");
	},
	faveMovie: "The matrix" // no need for ;
};

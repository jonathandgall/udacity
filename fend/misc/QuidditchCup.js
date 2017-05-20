/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

function hasEnoughPlayers(argument) {
	if (argument.length >= 7) {
		return true
	}
	else
		{return false}
	// body...
}


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));


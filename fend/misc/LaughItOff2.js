/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */
 
// declare your function
// then, call it!
// print the output with console.log
function laugh(num) {
	var foo = ""
	for (num; num > 0; num--) {
		foo = foo+"ha"
	}
	foo = foo+"!";
	return foo
}

console.log(laugh(3))
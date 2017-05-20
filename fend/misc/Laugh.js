/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(arg) {
    text = "";
    for (var i = 1; i <= arg; i++) {
        text = text + "ha";
    }
    return text + "!";
}
 /* finish the function expression */
console.log(laugh(10));

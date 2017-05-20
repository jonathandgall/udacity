/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 */

var num = 99;

while ( /* your stop condition goes here */ num > 0) {
    // check value of num
    if (num > 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    } else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    else { console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!") }

    // decrement num
    num = num - 1;
}

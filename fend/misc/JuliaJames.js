/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (/* your stop condition goes here */x < 21) {
    // check divisibility
    (x % 3 === 0) ? ((x % 5 === 0) ? console.log("JuliaJames") : console.log("Julia")) : ((x % 5 === 0) ? console.log("James") : console.log(x));
    // print Julia, James, or JuliaJames
    // increment x
    x += 1;

}

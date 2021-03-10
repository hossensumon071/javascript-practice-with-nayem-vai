// && || !


// A && B
// true && false = flase 
// false && true = false 
// true && true = ture 
// false && false = false 


// A || B 
// true || false = true 
// flase || true = true 
// false || false = false 
// true || true = true 


var a = 30
var b = 20 
var c = 40
var d = 50

if (a > b && c > d) {
    console.log('A is gretaer than B and C is greater than D')
} else {
    console.log('At least one condition is false')
}


if (a > b || c > d) {
    console.log('A is greater than B or C is greater than D')
} else {
    console.log('at least one condition is false')
}
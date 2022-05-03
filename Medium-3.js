
//MEDIUM #3

// Jose Portillo- NAVIGATOR 
// Tyra Fair - DRIVER


//GREATES COMMON DIVISER---the largest positive integer that divides two numbers
//for ex---->
//the greatest gcd for 8 and 12 is 4

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        //strict inequality !== checks if two operands are not equal
        //returns booleans
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    //math.abs is function that returns absolute value of # whether positive or negative
    while (y) {
        var t = y;
        y = x % y; //Division Remainder = y
        x = t;
    }
    return x;
}

console.log(gcd_two_numbers(336, 360));
console.log(gcd_two_numbers(78, 126));

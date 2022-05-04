//HARD ---SOLVED

// NAVIGATOR : Tyra Fair
// DRIVER : Jose Portillo





function checkBrackets() {

    // This is the string it checks ----->>>>
    let str = '[Hello World]';

    // Finding the character at given index 
    // var value = str.charAt(0); // this checks the first character
    // var value1 = str.charAt(str.length - 1); //this checks the last character

    if (str.charAt(0) === ('[') && str.charAt(str.length - 1) === (']')) {
        console.log(true);
    } else if (str.charAt(0) === ('{') && str.charAt(str.length - 1) === ('}')) {
        console.log(true);
    } else if (str.charAt(0) === ('(') && str.charAt(str.length - 1) === (')')) {
        console.log(true);
    } // (&&) - This is like saying AND 
    //-->( in the if else statement above they check the first character and the last character)
    else {
        console.log(false);
    }

};

//---------- UN-COMMENT EACH STRING ONE AT A TIME TO CHECK THAT IT WORKS (ALREADY TESTED-They do work)
// var str = '{Hello World}'; //TRUE
// var str = '(Hello World)'; //TRUE
// var str = '{Hello World)'; //FALSE
// var str = '[Hello World)'; //FALSE

checkBrackets();

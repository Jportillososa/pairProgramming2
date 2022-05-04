//EASY- 2

// NAVIGATOR : JOSE PORTILLO
// DRIVER : TYRA FAIR

//Create a function that checks an array for prime numbers then inserts any pimes into a new array.            

//arr is the argument (where the array numbers go)
//create "for" loop
//USING FACTORIZATION(finding what numbers it can be divided by to find prime number)


function numArray(arr) {
    let sortArray = [];
    arr.forEach((num) => {
        // FOR EACH RUNS EACH NUMBERS IN ARRAY AND EXECUTES A FUNCTION
        // (NUM)IS PARAMETER FOR THE NUMBERS
        let factor = 0; //another variable which starts at 0 everytime you run through number
        for (let i = 0; i <= num; i++) {
            //FOR LOOP IS CREATED (starts at zero; i is less than or = to num; loops every integer)
            //( if remainder (num %i) is = 0 it means that i is a factor of num )
            if ((num % i) === 0) {
                factor++  //everytime you find a factor this continues the loop
            }
        }
        if (factor === 2) {
            // if factor is = 2 this number is an array-then it pushes to the array
            sortArray.push(num)
        }
    })

    console.log(`Array of Prime Numbers : [${sortArray}]`);


    //logs new array
}

numArray([10, 18, 19, 29, 33, 35, 47, 66, 83])


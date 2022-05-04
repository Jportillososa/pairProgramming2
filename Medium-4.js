// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
// A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new 
// mileage.

//NAVIGATOR: JOSE PORTILLO
//DRIVER: TYRA FAIR



let car = {
    make: "Ford",
    model: "Ranger",
    year: 2021,
    mileage: 12000,
    color: "black"
}

let driveToWork = () => (car.mileage + 33);
let driveAroundTheWorld = () => driveToWork() + 24000;
let runErrands = () => driveAroundTheWorld() + 30;


console.log(`This is the old mileage : ${car.mileage}`);
console.log(`This is the new mileage after going to work : ${driveToWork()}`);
console.log(`This is the mileage now : ${driveToWork()}`);
console.log(`This is the new mileage after driving around the world : ${driveAroundTheWorld()}`);
console.log(`This is the mileage now : ${driveAroundTheWorld()}`);
console.log(`This is the new mileage after running Errands : ${runErrands()}`);
console.log(`This is the mileage now : ${runErrands()}`);
//összegzés algoritmusa//
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);

//számlálás algoritmusa//
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0)  {
        db++;
    }  
}
console.log("Páros: ", db);

//szélsőérték keresés algoritmusa//
let legnagyobb = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (legnagyobb < numericArray[i]) {
        legnagyobb = numericArray[i];
    }
}
console.log("Max: ", legnagyobb);

//eldöntés tétele//
let goal = false;
for (let i = 0; i < numericArray.length && goal == false; i++) {
    if(numericArray[i]==5) {
        goal = true;
    }
}
console.log("Ötös: ", goal);
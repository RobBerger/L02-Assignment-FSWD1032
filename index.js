"use strict";
let firstName = 'JimBob';
let birthday = '01/07/1855';
let individualID = `Name: ${firstName} | Date of Birth: ${birthday}`;
console.log(individualID);
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numListTotal = 0;
for (let value of numList) {
    numListTotal = numListTotal + value;
}
console.log(numListTotal);

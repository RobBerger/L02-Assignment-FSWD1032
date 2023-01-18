let firstName: string = 'JimBob';
let birthday: string = '01/07/1855';

let individualID: string = `Name: ${firstName} | Date of Birth: ${birthday}`;

console.log(individualID);

let numList: Array<number> = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let numListTotal: number = 0;

for (let value of numList){
   numListTotal = numListTotal + value;
}

console.log(numListTotal);
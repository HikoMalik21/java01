// task one//
console.log ("My name is Hikmat");
//task two//
var name ="Hikmat"
console.log(name);

//task three//
3
4
5
6

//task four//
let bookPrice = 750;
let bookAmount = 14;
let total = bookPrice * bookAmount;
console.log(total); 

//task five//

let kmSpeed =75;
let msSpeed = (kmSpeed * 1000) / 3600;
console.log(msSpeed);

//task six//

let year = +prompt("What is your age?");
let currentDate = 2023;
let result = currentDate-year;
let final = result * 365;
console.log(final);

//task seven//

let number = 93;
console.log(number ** 5);
console.log(number % 3);

//task eight//

let firstName = "Hikmat ";
let lastName = "Malikov";
console.log("Your name is "  + firstName + lastName +  " nice to meet you. ");

//task nine//

console.log(`“Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName} "`)

//task ten//

let fullName ="Hikmat Malikov";
console.log(fullName.length-1);

//task eleven//

console.log(fullName[0],fullName[7]);

//task twelve//

let adfullName = prompt("Add your full name");
let nameFirst = adfullName.slice(0,adfullName.indexOf(" "));
let nameLast = adfullName.slice(adfullName.indexOf(" ")+1);
console.log(nameLast,nameFirst);

//task thirteen//

let addyourName = prompt("Please write your name");
console.log(`Hello, ${addyourName}!`);

//task fourtenn//

let num1 = +prompt("Add the first number");
let num2 = +prompt("Add the second number");
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);

//task fifteen//

let num0 = 12345;
let num3 = 98765;
let finalR = num0 * num3
console.log(String(finalR)[5]);

//task sixteen//

//Cavablar hmml-de//


//task seventeen//

let num4 = "1234";
let nom1 = +num4[0];
let nom2 = +num4[1];
let nom3 = +num4[2];
let nom4 = +num4[3];
console.log(nom1+nom2+nom3+nom4);


//task eighteen//

let askname = prompt("What is your full name?");
let finalName = askname.slice(0,askname.indexOf(""));
console.log(`Hello, ${finalName}!`);

// task nineteen//

let price = prompt("Please write down 530.90");
let index = price.indexOf(".");
let manat = price.slice(0,index);
let coins = price.slice(index+1);
console.log(`${manat} manat ${coins} qepik`);

// task twenty//

let salary = prompt("Please write down your salary")
console.log(salary*13/100);

//task twenty one//

let familyName = prompt("Please write you Full name and father name");
let indexT = familyName.indexOf("");
let lastIndex = familyName.lastIndexOf("");
let surname = familyName.slice(0,indexT);
let nameFirstletter = familyName.slice(indexT+1,indexT+2);
let fatherName = familyName.slice(lastIndex+1,lastIndex+2);
console.log(`${surname} ${nameFirstletter} ${fatherName} `);


//task twenty two//
let val = +prompt("Amount");
let year1 = +prompt("year");
let percent = +prompt("percent");
let result1 = val + ((val/100 * percent) * year);
console.log(result1);


//task twenty three//

let a = 10;
let b = 20;
console.log(a>b);
console.log(b<a);
console.log(b>=a);
console.log(a>=b);
console.log(a<=b);
console.log(b<=a);
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b); 










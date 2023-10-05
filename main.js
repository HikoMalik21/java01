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

//task twenty four//

let question = confirm("Are you above 18 years?");
if (question == true){
    alert("Welcome to our page!")
}
else{
    alert("Access denied")
}

//task twenty five//

//let numberTwo = +prompt("Please write down three two digit numbers");
//let firstN = numberTwo.indexOf("");



//task twenty five new version//

let onedigit = +prompt("Please add first two digit");
let twodigit = +prompt("Please add second two digit");
let threedigit =+prompt("Please add third two digit");
let summ = onedigit+twodigit+threedigit;
let avarage= summ/3;
console.log(avarage);


//task twenty six//

let yearB = +prompt("Please write down any year");
if(yearB %4==0){
    alert("It`s a long year")
}
else{
    alert("This is not long year")
}

//task twenty seven//

//let id = prompt ('Enter product id: 1,2,3,4 or else');
//switch(new Product1().id())

//{

    //case (id === '1') {
      //  alert ('Available 10 pcs.');
     // }
     // case  (id === '2') {
     //   alert ('Available 256 pcs.');
     //  }
     // case  (id === '3') {
      //  alert ('Available 53 pcs.');
      // }
      //  case  (id === '4') {
      //  alert ('There are 3 available.');
      // }
      //case {
      //  alert ("Available 0 pcs");
     // } 
      
  
//}


//task twenty eight//

//let gender = prompt("Waht is your gender? F or M?")
//if(gender = F){
   // alert("Your gerder is female")
//}
//else{
   // alert("Your gender is Male")
//}


//let gender = prompt("What is your gender? F or M?");
//let female= F;
//let genderResult = female == F ? "Female" : "Male";
//console.log(genderResult);


//task twenty nine//

let currentMonth = +prompt("What is the current mouth?");
if(currentMonth==1){
    alert("This Is January")
}
if(currentMonth==2){
    alert("This Is February")
}
if(currentMonth==3){
    alert("This Is March")
}
if(currentMonth==4){
    alert("This Is April")
}
if(currentMonth==5){
    alert("This Is May")
}
if(currentMonth==6){
    alert("This Is June")
}
if(currentMonth==7){
    alert("This Is July")
}
if(currentMonth==8){
    alert("This Is August")
}
if(currentMonth==9){
    alert("This Is September")
}
if(currentMonth==10){
    alert("This Is October")
}
if(currentMonth==11){
    alert("This Is November")
}
if(currentMonth==12){
    alert("This Is December")
}

//Task thity//

let data = prompt("Please write today date: YYYY.MM.DD");
let inDex =date.indexOf(".");
let YeaR =date.slice(0,inDex);
let monTh=date.slice(inDex+1);
let indeX=date.lastIndex(".");
let DaY=date.slice(indeX+1);
console.log(`${DaY} ${monTh} ${YeaR}-cu il`);




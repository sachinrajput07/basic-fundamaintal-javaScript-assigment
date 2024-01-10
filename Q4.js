//You are developing a booking appli-ation for a -inema+ The ti-ket pri-e depends on the type of the 
//viewer("-hild", "adult", or "senior")+ Write a program whi-h -al-ulates the pri-e a--ordingly and prints the total 
//pri-e to be paid+ Let’s assume the ti-ket pri-e for a -hild is Rs+ 100, adult ti-ket pri-e is Rs+ 150 and ti-ket pri-e 
//for a senior is Rs+ 120

let numberOfchilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childticketprice=100;
let adultticketprice=150;
let seniorticketrpice=120;

let totalprice= 
numberOfchilds * childticketprice +
numberOfAdults * adultticketprice +
numberOfSeniors * seniorticketrpice ;

console.log("The total ticket price is",totalprice);
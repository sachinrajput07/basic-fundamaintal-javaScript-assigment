//Suppose you are building a payment -he-kout page and must display the final pri-e after the dis-ount+ 
//Create a simple dis-ount -al-ulator that takes two values from the variables - the total -ost and the 
//dis-ount per-entage - and prints the dis-ounted value

let totalValue = 2000;
let discountPercentage = 20;

let discount = totalValue * discountPercentage /100;

let discountedValue = totalValue - discount; 

console.log("The final price after discount is : Rs.",discountedValue);
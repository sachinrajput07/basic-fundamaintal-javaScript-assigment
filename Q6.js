//You are developin2 a form validation system. Write a pro2ram that takes user information(such as name, 
//email, a2e) and uses the typeof operator to check the data type of each input. Print appropriate messa2es 
//like "Name should be a strin2," "Email should be a strin2," or "02e should be a number." if any field is not 
//proper//

let name = "mithun";
let email = "mithun.s@pw.live";
let age = "21";

if(typeof name !=="string"){
    console.log("Name should be a String");
}else if(typeof email !== "string"){
          console.log("Email should be a string");
}else if(typeof age!=="number"){
    console.log("Age should be a number");
}else{
    console.log("yahooo! All Fild Are Proper");
}
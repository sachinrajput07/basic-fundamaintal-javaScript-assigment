//, You are building a shipping appli-ation+ Write a program that takes the type of pa-kage ("standard", 
//"express", or "overnight") and uses a swit-h statement to -al-ulate and print the estimated delivery time 
//based on the pa-kage type+ For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" 
//would be delivered the next day+//

let package="standerds"

switch(package){
    case "standerds":
        console.log(package,"might take 3-5 days");
        break;

    case "express":
        console.log(package,"might take 1-2 days");
        break;
        
    case "overnight":
        console.log(package,"would be delivered the next day"); 
        break;
        
    default:
        console.log("Invalid choice");  
        break;  
}
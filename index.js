// UTILITY
function printValue(value){
    console.info(value);
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const maxbudget=10000; //in ksh;
console.log("You:how much is our budget");
console.log("Teacher:We have a fixed budget of + maxbudget");

//TODO: ADD redeclarable variable
let isRaining=true; //;
console.log("You:are you ready?it looks like it will rain");
console.log("Teacher:Yes, it looks like it + isRaining");

//TODO: ADD re-assignable but not redeclarable variable
let shoppinglist=["Milk", "Bread", "Eggs", "Vegetables", "Fruits"];
console.log("You:and what are we going to buy exactly");
console.log("Teacher:We will buy exactly + shoppinglist");

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const numItemsonlist=5;
console.log("You:how many items are on the shopping list");
console.log("Teacher:Yes, it is equal to 5 items");

//TODO: Create a redeclarable variable with a boolean value
let hasBasket= true;
console.log("You: who + hasBasket");
console.log("Teacher:Yes, it is in the bag");

//TODO: Create a re-assignable variable with a string value

let shoppingLocation="Supermarket";
console.log("You:are you ready, ithink we should now go to + shoppingLocation");
console.log("Teacher:Yes, let me now get the + shoppinglist.join(",")");

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let shoppingPlanmessage="twende" + shoppingLocation + "tukabuy" + shoppinglist.join(",");

//TODO: Interpolate string (`${}`)
let interpolatedShoppingPlan='tunaishia ${shoppingLocation} kubuy: ${shoppinlist.join(",")';
console.log("You:and you should know it nearly + is raining");
console.log("Teacher:Yes, it is nearly raining but + shoppingLocation + is not far away");

//TODO: Convert to uppercase 
let uppercaseShoppingPlan = shoppingPlanmessage.toUpperCase();
console.log("You:and you should know it nearly + is raining");
console.log("Teacher:Yes, it is nearly raining but +  shoppingLocation + is not far away");


//TODO: Convert to lowercase
let lowercaseShoppingPlan = shoppingPlanmessage.toLowerCase();
console.log("You:and you should know it nearly + is raining");
console.log("Teacher:Yes, it is nearly raining but + shoppingLocation + is not far away");

//TODO: Index a specific character
let firstCharacter = shoppingPlanmessage.charAt(0);
console.log("You:what do we buy first");
console.log("Teacher: The first item will be+ firstCharacter");

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
let enoughitems = numItemsonlist.length ==='5';
console.log("You: How many items are on the shopping list?enoughitems");
console.log("Teacher: Yes, it is equal to 5 items");

//TODO: strict inequality
let  iswithinbudget = maxbudget !== 12000;
console.log("You: Is our budget equal to 1000 kenyan shillings?enoughitems");
console.log("Teacher: Yes, it is not equal to 12000 kenyan shillings");

//TODO: equality
let isSupermarket = shoppingLocation == 'supermarket';
//TODO: inequality
let budgetNotEqual = maxbudget != 12000;
console.log("You: Is our budget equal to 1000 kenyan shillings?budgetNotEqual");
console.log("Teacher: Yes, it is not equal to 12000 kenyan shillings");

//TODO: greater than
let budgetGreaterThanThreshold = maxbudget > 8000;
console.log("You: Is our budget greater than 1000 kenyan shillings?budgetGreaterThanThreshold");
console.log("Teacher: Yes, it is greater than 8000 kenyan shillings");

//TODO: less than
let budgetlessThanThreshold = maxbudget < 15000;
console.log("You:is our budget less than 10000 kenyan shillings?budgetLessThanThreshold");
console.log("Teacher: Yes, it is less than 10000 kenyan shillings");

//TODO: greater or equal to
let budgetGreaterOrEqualToThreshold = maxbudget >= 10000;
console.log("You: Is our budget greater than or equal to 1000 kenyan shillings?budgetGreaterOrEqualToThreshold");
console.log("Teacher: Yes, it is greater than or equal to 8000 kenyan shillings");


//TODO: less or equal to
budgetLessOrEqualToThreshold = maxbudget <= 10000;
console.log("You: Is our budget less than or equal to 1000 kenyan shillings?budgetLessOrEqualToThreshold");
console.log("Teacher: Yes, it is less than or equal to 10000 kenyan shillings");

// 5.0 CONTROL FLOW
// TODO: if-else statement
if(!isRaining && hasBasket) {
    printValue("you:Can we go shopping");
    printValue("teacher:yes");
}else{
    printValue("you:Can we go shopping");
    printValue("teacher:No, we can't go shopping");
}

//TODO: switch-case
switch(shoppingLocation) {
    case'supermarket':
    console.log("You:were are we going shopping");
    console.log("Teacher:yes,we are going to carrefour");
    break;
    case'market':
    console.log("You:And if it is closed");
    console.log("Teacher:we'll go to Kawangware");
    break;
    default:
        console.log("You:But that will take a longer time");
        console.log("Teacher:stop complaining and get going");
        break;
}


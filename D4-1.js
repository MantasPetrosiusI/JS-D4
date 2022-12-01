/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let num1 = 2;
let num2 = 5;
let calcArea = area(num1,num2);
console.log("\nCalculate area of rectangle: "+num1+" * "+num2+" = "+calcArea);

function area(l1, l2){
    return l1*l2;
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
num1 = 2;
num2 = 5;
let calcSum = crazySum(num1,num2);
console.log("\nCalculate sum of two numbers: "+num1+" + "+num2+" = "+calcSum);
;
function crazySum(int1, int2){
    if(int1 === int2){
        return (int1+int2)*3;
        }else{
            return int1+int2;
        }
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
num1 = 21;
let calcDiff = crazyDiff(num1);
console.log("\nCalculate difference between user input and number 19: "+calcDiff);

function crazyDiff(int1){
    if(int1 > 19){
        return (int1-19)*3;
    }else{
        return 19-int1;
    }
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
let n = 399;
let boundaries = boundary(n);
console.log("\nEntered number is 400 or between 20 and 100 inclusive? True or False : "+boundaries)

function boundary(n){
    if(n>=20 && n<=100 || n===400){
        return true;
    }else{
        return false;
    }
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
string = "A very long string";
let stringify = strivify(string);
console.log("\n"+stringify)
function strivify(string){
    if(string.startsWith("Strive")){
        return string;
    }else{
        return "Strive"+string;
    }
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
let pos = 13;
check3and7(pos);
function check3and7(pos){
    if(pos>0){
    if(pos%3===0){
        console.log("\nThe number given is a multiple of 3.");
    }else if(pos%7===0){
        console.log("\nThe number given is a multiple of 7.");
    }else{
        console.log("\nThe number given is not a multiple of 3 or 7");
    }
}
}

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
string = "Strive";
let reverse = reverseString(string);
console.log("\n"+string + " => "+reverse);

function reverseString(string){
    let tempString="";
    for(let i = string.length-1; i>=0; i--){
        tempString += string[i];
    }
    return tempString;
}

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
string = "Never gonna run around and desert you"
let uppercased = upperFirst(string);
console.log("\nOriginal: "+string +"\nFirst letter of each word uppercase: "+uppercased);
function upperFirst(string){
    let tempString = string.toLowerCase().split(' ');
    for(let i = 0; i<tempString.length; i++){
        tempString[i] = tempString[i].charAt(0).toUpperCase() +
        tempString[i].substring(1);
    }
    return tempString.join(" ");
}

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
string = "Never gonna make you cry";
let cut = cutString(string);
console.log("\nOriginal string: "+string+"\nString after cutting: "+cut);
function cutString(string){

    return string = string.slice(1, -1);;
}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
n = 5;
let randoms = giveMeRandom(n);
console.log("\nNumber of random numbers: "+n+"\nThey were: ",randoms);
function giveMeRandom(n){
    let randArray =[];
    for(let i = 0; i<n; i++){

   randArray[i] = Math.floor(Math.random()*11);
}
return randArray;
}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

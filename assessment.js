// Question one
// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function stringReverse(food){
    return food.reverse();
}
let food = "eating";
stringReverse(food);
// Question two
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function findTarget(num, target){
    let left = 0;
    let right = num.length-1;
    while (left<=right){
        let middle = Math.floor ((left+right)/2);
    }
    if (num[middle]=== target){
        return middle;
    }
    else if (num[middle]<target){
        right = middle-1;
    }
    else{
        left = middle+1;
    }
    return null;
}
let num = [2,8,0,23,5,45,76];
let target = 23;
// findTarget(num, target);


// Question three
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

function leapYear(year){
    for (let element of year)
}


// Question four
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

function numbers(num){
    for (i=100; i<num.length; i++)
    if (num%3===0 && num%5===0){
        console.log("FizzBuzz")
    }
    else if(num%5===0){
        console.log("Buzz")
    }
    else if(num%3===0){
        console.log("Fizz")
    }
    else{
        console.log(num)
    }
}


// Question five
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]

function multiplyArr(numArray){
    numArray.forEach(console.log(numArray[i]*4));
}
let numArray = [12, 87, 45, 75, 23, 64, 73];
multiplyArr(numArray);

// Question six
// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]


function convertArray(nums){
    let emptyArr = []
    for (i=0; i<nums.length; i++)
    emptyArr.push(nums(nums[i]))

}
let nums = ["10", "24", "45", "56", "67"];
convertArray(emptyArr)

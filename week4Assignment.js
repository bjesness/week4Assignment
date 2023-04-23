//week 4 Assignment, 4.23.2023


/*** Question 1 ***/

//create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length - 1]);//is it 90

// 1A - programatically subtract the value of the first element from the value in the last element
ages[ages.length - 1] = ages[ages.length - 1] - ages[0];//last value should become 90

console.log(ages[ages.length - 1]);//confirm it is 90

//1b - add a new age to your array and repeat above step

//adding age 20
ages.push(20);
ages[ages.length - 1] = ages[ages.length - 1] - ages[0];//should be 20-3 = 17

console.log(ages[ages.length - 1]);//printing 17,yes it works


//1C - use a loop to iterate through the array and calculate ave. age
let sumAges = 0;
for (let i = 0; i < ages.length; i++) {
    sumAges = sumAges + ages[i];
}
averageAge = sumAges / ages.length;
console.log(averageAge);//check it, 27.11, in my example, ages array was permanently modified by subtracting 1st value


/*** Question 2 ***/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2A - use loop to iterate through array and calc ave. number of letters per name
let sum = 0;
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i].length;
}
let aveNumberOfLetters = sum / names.length;
console.log(aveNumberOfLetters);//check it, should be 3.83

//2B - use loop to go through array and concatenante all names together seperated by spaces
let x = 0;
let arrayString = '';
while (x < names.length) {
    arrayString = arrayString.concat(" ", names[x]);
    x++;
}

console.log(arrayString);//check it, tried this with i instead of x, and loop was stuck, not sure why

//Question 3, use length-1 to find it's index, to remove it and return it, use names.pop()

//Question 4, accessing first element, index always starts with zero, names[0]

//Question 5
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);

}

console.log(nameLengths);//check it

//Question 6

//write a loop to add all the values together
let s = 0;
for (let i = 0; i < nameLengths.length; i++) {
    s += nameLengths[i];//sum them

}
console.log(s);//check it, 23

//Question 7
let wordX = '';
let words = (word, n) => {
    for (let i = 1; i <= n; i++) {
        wordX = wordX.concat(word);
    }
    return wordX;
}
console.log(words("barrett", 5));//check it

//Question 8
let fullName = (firstName, lastName) => firstName.concat(" ", lastName);

console.log(fullName("Ted", "Lamb"));//check it

//Question 9
//look for a value under 100, return true if sum of all values are greater than 100
let testArray = [51, 50];
let testArray2 = [1, 10];//used later, line 134
let over100 = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(over100(testArray));//check it

//Question 10
//followed https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//this is a little gooofy, nested functions....but it works with my testArray
let total = 0;
let current = 0;
let averageArray = (array) => array.reduce((total, current) => total + current) / array.length;

console.log(averageArray(testArray));//check it

//Question 11
let whosGreater = (array1, array2) => {

    if (averageArray(array1) > averageArray(array2)) {
        return true;

    } else {
        return false;
    }

}

console.log(whosGreater(testArray, testArray2));//check it

//Question 12

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 20));//check it

//Question 13, create a function on your own, that solves a problem
//problem description: you have an array of numbers, you want the min number and max number
let testArray3 = [10000, 50, 25];
let min = 0;
let max = 0;

let findMinMax = (array) => {
    min = array[0];
    max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];//new max
        } else if (array[i] < min) {
            min = array[i];//set new min
        }
    }

    return [`max value is ${max}, min value is ${min}`];//make it clearer in the console log
}

console.log(findMinMax(testArray3));

//found easier solution
console.log(Math.max(testArray3));
console.log(Math.min(testArray3));
// Array Challenge

// Have the function ArrayChallenge(arr) take the array of number stored 
// in arr and return the string true if any combination of numbers in the array (excluding the largest number) 
// can be added up to equal the largest number in the array. For example: if arr contains 
// [4, 6, 23, 10, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers.

// Examples:

// Input: [5, 7, 16, 1, 2]
// Output: false

// Input: [3, 5, -1, 8, 15]
// Output: true

function arrayChallenge(arr) {
//Find the largest number
//Make a copy of the array excluding the largest number
//Add the total of all numbers in the copied array to get their total
//Compare that total with the largest number
//return true if they are equal
//or return false if they are not

//FIND THE LARGEST NUMBER
let largestNumber = 0
let indexOfLargest
for (let i = 0; i < arr.length; i++){
    if (arr[i] > largestNumber) {
        largestNumber = arr[i]
        indexOfLargest = arr.indexOf(arr[i]) //standalone variable
    }
}

// REMOVE THE LARGEST NUMBER
arr.splice(indexOfLargest, 1)
let newArrayWithoutLargest = arr

let sumOfAllNums = 0

// ADD THE NUMBERS
for (let j = 0; j < newArrayWithoutLargest.length; j++){
    sumOfAllNums = sumOfAllNums + newArrayWithoutLargest[j]
}

// COMPARE THE NUMBERS
if (largestNumber === sumOfAllNums){
    return true
} else {
    return false
}
}

console.log(arrayChallenge([4,6,23,10,3])) //true
console.log(arrayChallenge([5,7,16,1,2])) //false
console.log(arrayChallenge([3,5,-1,8,15])) //true


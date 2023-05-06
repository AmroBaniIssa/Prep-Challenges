'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max=0;
    // write your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
// console.log(findMax([12, 32, 22, 45, 78, 12, 50]), "find max function")
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) => {
    let sum=0;
    // write your code here
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {

            sum += arr[i]
            console.log(sum)
        }
    }
    return sum;
}
// console.log(sumNums([20, "234", "car", 41, 20, "chair"]))
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
    let reversearr=[]
    for(let i=1; i<=arr.length;i++){
        reversearr.push(arr[arr.length-i])
    }
    // console.log(arr,"hhhhhhh")
    return reversearr
    // write your code here
}
// console.log(reverseArray(['C#', 'JS', 'Ruby','Python']))
// console.log(reverseArray([1, 2, 3, 4, 5]))

// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums, reverseArray };
"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
  // write your code here
  let array = str.split(" ");
  console.log(array);
  let indexOfWord = Math.round((array.length - 1) / 2);
  console.log(indexOfWord);
  for (let i = 0; i < array.length; i++) {
    let word = array[indexOfWord];
    console.log(word);
    let lengthOfWord = word.length;
    return lengthOfWord;
  }
};
// console.log(wordLength("You can't handle the truth!"))
// console.log(wordLength("You're gonna need a bigger boat"))

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
  // write your code here
  for (let i = 0; i < str1.length; i++) {
    if (str1.length === str2.length) {
      // console.log("hi")
      //   console.log(str2.includes(str1[i]))
      if (str2.includes(str1[i]) === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};
// console.log(wordLetters("dad","add"))
// console.log(wordLetters("table","label"))

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//



// function appendAndDelete(s, t, k) {
//     // check if k is too long
//   if (k >= s.length + t.length) {
//     return "Yes";
//   }

//    // calculate the common characrers
//   let commonLength = 0;
//   for (let i = 0; i < Math.min(s.length, t.length); i++) {
//     if (s[i] !== t[i]) {
//       break;
//     }
//     commonLength++;
//   }
//   // calculate the requierd operatins
//   const operationsRequired = s.length + t.length - 2 * commonLength;
// //   check if k === or bigger than the requierd operations 
//   if (operationsRequired % 2 === k % 2 && operationsRequired <= k) {
//     return "Yes";
//   }
//   else {
//     return "No";
//   }
// }
// console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
// console.log(appendAndDelete("ashley", "ash",2));




const targetIndex = (arr, int) => {
  // write your code here
};
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };

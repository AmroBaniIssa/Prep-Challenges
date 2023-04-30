"use strict";

// Important Note:
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given an array of objects, count the objects by using reduce method.

// Input:
// const voters = [
//   {
//     voter_Name: "Adam Scott",
//     votes_To: "James",
//   },
//   {
//     voter_Name: "Abril Blake",
//     votes_To: "Jade",
//   },
//   {
//     voter_Name: "Ruby Andrews",
//     votes_To: "Jade",
//   },
//   {
//     voter_Name: "Junior Maxwell",
//     votes_To: "Bailey",
//   },
//   {
//     voter_Name: "Junior Maxwell",
//     votes_To: "Bailey",
//   },
// ];
//
// Output: 5

const objectCounter = (obj) => {
  // write your code here
  let counter = obj.reduce((acc, value, index) => {
    acc = index + 1;
    return acc;
  }, 0);
  return counter;
};
// console.log(objectCounter(voters));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass'
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
  // write your code here
  let stri = str.split(" ");
  let revers = stri.reduce((acc, value) => {
    return value + " " + acc;
    // console.log(acc);
    // return acc;
  }, "");
  return revers.trim();
};
console.log(stringReverse("you shall not pass"));
// ;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
let voters = [
  {
    voter_Name: "Adam Scott",
    votes_To: "James",
  },
  {
    voter_Name: "Abril Blake",
    votes_To: "Jade",
  },
  {
    voter_Name: "Ruby Andrews",
    votes_To: "Jade",
  },
  {
    voter_Name: "Junior Maxwell",
    votes_To: "Bailey",
  },
  {
    voter_Name: "Junior Maxwell",
    votes_To: "Bailey",
  },
];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

const statistics = (obj) => {
  // write your code here

  let counter = obj.reduce((acc, value, index) => {
    if (acc[value.votes_To]) {
      acc[value.votes_To] += 1;
    } else {
      acc[value.votes_To] = 1;
    }

    return acc;
  }, {});
  return counter;
};
console.log(statistics(voters));

// -------------------------------------------------------------------------------------------------------

module.exports = { objectCounter, stringReverse, statistics };

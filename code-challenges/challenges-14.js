"use strict";

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
let Input = "I did my waiting 12 years of it in Azkaban";
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
  // write your code here
  let indexNumber = str.lastIndexOf(" "); //to git the index of last space
  let x = str.slice(indexNumber + 1, str.length);
  console.log(indexNumber);
  console.log(x);
  return x;
};
// console.log(LastWord(Input))
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
  // write your code here
  let answer = str.split(" ");
  let x = answer.slice(-1);
  // console.log(str)
  // console.log(answer)
  // console.log(x)
  return x.toString();
};
// console.log(LastWord_2(Input))

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
  // write your code here
  const arr = str.split(" ");
  console.log(arr);
  let x = arr.indexOf("I");
  let y = arr.indexOf("am");
  let z = arr.indexOf("was");
  if (x >= 0) {
    arr.splice(x, 1, "We");
  }
  if (y >= 0) {
    arr.splice(y, 1, "are");
  }
  if (z >= 0) {
    arr.splice(z, 1, "were");
  }

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(arr);

  return arr.join(" ");
};
// console.log(replaceWords("I thought you had a plan"))
// console.log(replaceWords("I was there 3000 years ago"))
// console.log(replaceWords("I am Venom"))

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"]
// Output: "move it away from the, street"
//

const arrToStr = (arr) => {
  // write your code here
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
  // write your code here
};
// -------------------------------------------------------------------------------------------------------
let arrx = [3, 2, 3, 3, 6, 3, 5, 5, 8, 8, 6, 6, 6, 6];

function equalizeArray(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (frequency[element]) {
        frequency[element]++;
        console.log(frequency);
      } else {
        frequency[element] = 1;
      }
    }
    
    // Find the maximum frequency
    let maxFrequ = 0;
    for (const element in frequency) {
        maxFrequ = Math.max(maxFrequ, frequency[element]);
    }
    
    const minNumOfDelet = arr.length - maxFrequ;
    
    return minNumOfDelet;
  }
  console.log(equalizeArray(arrx));


'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//  
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output:
// [89, 41, 31, 111, 31]
// 

const oddFiltration = (arr) => {
    let odd=arr.filter((num)=>{
        return num % 2!==0;
    })
    // write your code here
    return odd
}
// console.log(oddFiltration([20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]))
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// optional:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
var cvs = [
    {
        firstName: "Jason",
        LastName: "James",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Shira",
        LastName: null,
        yearsOfExperience: 5,
        tech: ".Net"
    },
    {
        firstName: "Dmitri",
        LastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python"
    },
    {
        firstName: "Isabella",
        LastName: null,
        yearsOfExperience: 4,
        tech: "Java"
    }
]

// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvsFiltration = (arr) => {

    const result=[]
    let candidates= arr.filter((cv)=>{
        if(cv.yearsOfExperience>=4 &&cv.tech=="JS"){
           let fullName=cv.firstName+" "+cv.LastName
           let tech=cv.tech
           let resultx={fullName,tech}
           result.push(resultx)
        }
        return result
    })
    console.log(result)
//    let fullName=candidates[firstName]
//    console.log(fullName)
    
   return result
}
// console.log(cvsFiltration(cvs));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// optional:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

const vowelsFiltration = (arr) => {
    const res=[];
    let vowels=arr.filter((vowel)=>{
        let regexVowels=/[aeiou]/;
        let str=vowel
        // console.log(str)
        // console.log(regexVowels.test(str))
        if(regexVowels.test(str)==false){
           console.log("hi")
            res.push(vowel)
            console.log(res)
        }
    })
    // write your code here
    return res
} 
console.log(vowelsFiltration(['car', 'boy', 'spy', 'building', 'why', 'dry' ]));

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// Input:
// first_Employee = [C, C#, Java, Angular, PHP]
// sec_Employee = [C#, .Net, JavaScript, React, Angular]

// Output:
// result = [C, Java, PHP, .Net, JavaScript, React]

// Hint:
// - the 'include' method can help you, read about it.

const skillComparison = (arr1, arr2) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };


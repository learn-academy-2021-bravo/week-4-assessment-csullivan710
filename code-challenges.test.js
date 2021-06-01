// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { min } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "yellow", "blue", "pink" , "green"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// define your test method
describe("shuffle", () => {
    // give it the parameters to test
    test ("returns the shifted array ", () =>{
        // give expected output
        expect(shuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
        expect(shuffle(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
    })
})

var colors1 = ["purple", "yellow", "blue", "pink" , "green"]
var colors2 = ["chartreuse", "saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.
// make function
const shuffle = (array) => {
    //make it remove the first value
    array.shift();
    //shuffle it
    return array
}
    












// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, -59, 8, 24]
// // Expected output: [-59, 109]

// //make desctiption
// describe("minmax", () => {
//     // give it the parameters to test
//     test ("returns the minimum and maximum numbers ", () =>{
//         // give expected output
//         expect(minmax(nums1)).toEqual([-8, 90])
//         expect(minmax(nums2)).toEqual([-59, 109])
//     })
// })


// // b) Create the function that makes the test pass.
// // create function
// const minmax = (array) => {
// // return minmimum number, and maximum number in an array format
// // use Math.min and Math.max in array brackets
//    return [Math.min(...array), Math.max(...array)]
// }




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
//make test function
describe("noDupe", () =>{
    //give test parameters
    test("returns one array with no duplicate values", () =>{
        expect(noDupe(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})



// b) Create the function that makes the test pass.
//create function for removing values
const noDupe = (array1, array2) => {
    //add arrays make empty array for new
    let combined = [array1 += array2]
    let newArr =  []
    //loop over array checking each value
    for(let i =0; i <combined.length; i++){
        if(newArr.indexOf(combined[i] === -1)){
            //push values to new array
            newArr.push(combined[i])
        }
    }
    return newArr
}

//it kept returning the whole combined two arrays, I need to figure out how to remove duplicates
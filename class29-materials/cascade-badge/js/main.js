//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

function reverseTeam(arr){
    arr = ['Pikachu', 'Charmander', 'Squirtle']
    console.log(arr.reverse())
    
}

reverseTeam()



//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// map array a and then reduce
// map array b and then reduce

// if array a reduced > array b reduced return true else false

let arrayA = [2, 5, 5, 3, 5, 5]
let arrayB = [3, 3, 5]

let arrA = arrayA.map(x => x * x)
let arrB = arrayB.map(x => x * x * x)

let arrASum = arrA.reduce((x, i) => x + i, 0);
let arrBSum = arrB.reduce((x, i) => x + i, 0);

if (arrASum > arrBSum) {
    console.log(true) }
        else {
     console.log(false)
        }

function compareSquareAndCube(a, b){
    return a.reduce((x, i) => x + i **2, 0) > b.reduce((x, i) => x + i**3, 0)
}
    


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr){
    return arr.filter((e, i) => e % i === 0)

}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

console.log(sumOfValues(['5', 3, '2', 1]))
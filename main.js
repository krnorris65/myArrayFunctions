
const myArray = [100, 1, 200, 2, 300, 3, 200];
//example filter() method creates a new array with all elements that pass the test implemented by the provided function.
function myFilter(array, condition) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (condition(element, i)) {
            result.push(element);
        }
    }
    return result;
}
const filtered = myFilter(myArray, (num) => num < 100);
// console.log(filtered);

// forEach() method executes a provided function once for each array element.

const myForEach = (array, execute) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        execute(element, i);
    }
}
const consoleLogThis = (item) => console.log(item);
// myForEach(myArray, consoleLogThis)

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const myMap = (array, change) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const modifiedElement = change(element, i);
        result.push(modifiedElement);
    }
    return result
}
const add20 = (num) => num + 20;
const mappedArray = myMap(myArray, add20);
// console.log("map", mappedArray);

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const myIncludes = (array, include) => {
    let inArray = false;
    let i = 0;

    do{
        if(array[i] === include){
            inArray = true;
            break;
        }
        i++
    }while(i < array.length)

    return inArray;
}
const doesInclude = myIncludes(myArray, 100)
// console.log(doesInclude)
const doesNotInclude = myIncludes(myArray, 40)
// console.log(doesNotInclude)


// some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
const mySome = (array, condition) => {
    let result = false;
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        if(condition(element, i)){
            result = true;
        }
    }
    return result;
}
const divisibleBy2 = num => num % 2 === 0;
// console.log(mySome(myArray, divisibleBy2));
const greaterThan1000 = num => num > 1000;
// console.log(mySome(myArray, greaterThan1000));


// every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const myEvery = (array, condition) => {
    let result = []

    for(let i = 0; i < array.length; i++){
        const element = array[i]
        if(condition(element, i)){
            result.push(element);
        }
    }

    if(result.length === array.length) {
        return true;
    } else {
        return false;
    }
}
// console.log(myEvery(myArray, divisibleBy2)) 
const divisibleBy1 = num => num % 1 === 0;
// console.log(myEvery(myArray, divisibleBy1)) 

// find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const myFind = (array, condition) => {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(condition(element, i)){
            return element;
        }
    }
}
// console.log(myFind(myArray, divisibleBy2))

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const myIndexOf = (array, indexOf) => {
    let inArray = -1;
    let i = 0;

    do{
        if(array[i] === indexOf){
            inArray = i;
            break;
        }
        i++
    }while(i < array.length)

    return inArray;
}

// console.log(myIndexOf(myArray, 200))
// console.log(myIndexOf(myArray, 400))

// lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const myLastIndexOf = (array, indexOf) => {
    let inArray = -1;
    let i = 0;
    
    do{
        if(array[i] === indexOf){
            inArray = i;
        }
        i++
    }while(i < array.length)
    
    return inArray;
}
// console.log(myLastIndexOf(myArray, 200))

// join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const myJoin = (array, join = ",") => {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if((i + 1) === array.length){
            result += element;
        }else {
            result += element + join;
        }
    }

    return result;
}
// console.log(myJoin(myArray))
// console.log(myJoin(myArray, "--"))

// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const myConcat = (array, array2) => {
    let result = array;
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i];
        result.push(element);
    }

    return result;
}
const myArray2 = [4, 5, 6]
// console.log(myConcat(myArray, myArray2))

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const myArray3= ["a", "b", "c"]

const myReduce = (array, reducer) => {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        result = reducer(result, element);
    }

    return result;
}

const combine = (a, b) => {
    return a+b;
}

// console.log(myReduce(myArray, combine))
// console.log(myReduce(myArray3, combine))

// reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const myReverse = (array) => {
    const result = []
    for (let i = array.length; i > 0; i--) {
        const index = i - 1;
        const element = array[index]
        result.push(element)
    }
    return result;
}

console.log(myReverse(myArray3))
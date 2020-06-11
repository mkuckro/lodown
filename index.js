'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: take a value as an argument and return that input value unchanged.
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {*}: input value unchanged
 */
 
 function identity(value) {
    return value;
 }
 
 module.exports.identity = identity;
 
 /**
 * typeOf: take a value as an argument and return the datatype of the value.
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {String}: Returns a string representation of the datatype of the input value. 
 * 
 * Edge Case: If the datatype is 'object', check for array, date, and null values and return 'array', 'date', and 'null' accordingly
 */
 
 function typeOf(value) {
    // check if the value has the datatype 'object'
    if (typeof value === 'object') {
        // if it does, check for array
        if (Array.isArray(value)) {
            // if the value is an array, return 'array'
            return 'array';
        // if the value is not an array, check for value equals null
        } else if (value === null) {
            // if true, return null
            return 'null';
        // if the value is not an array or null, check for date
        } else if (value instanceof Date) {
            // if the value is an instance of date, return 'date'
            return 'date';
        // if no previous inner conditions are met, return object
        } else {
            return 'object';
        } 
    // if the value does not have the datatype object, return the datatype of the value
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to return the number of elements from an array passed into the
 * function matching the num argument passed to the array. Elements returned will start
 * from the beginning of the array. If the number passed to the function is larger than
 * the length of the array, the entire array will be returned.
 * 
 * @param {Array} array: The array from which to return elements.
 * @param {Number} number: A value with datatype number.
 * 
 * @returns {Array}: Returns the number of elements from an array indicated
 * by the num parameter and starting from index 0. Returns the entire array if the num argument
 * is greater than the length of the array argument.
 * 
 * Edge Cases:
 *  1. Something other than an array is passed to the function, return an empty array
 *  2. The number argument does not have the datatype 'number' or there is no num argument, 
 * return the first element of the array.
 */
 
 function first(array, num) {
    // check for if the arrray is an array and the num argument is greater than 0
     if (Array.isArray(array) && num > 0 && num < array.length) {
        // if true, return the array elements from index 0 to the index corresponding to the num argument
        return array.slice(0, num);
    // check if the num argument is greater than the array length
     } else if (num > array.length) {
        // if true, return the entire array
        return array;
    // check if the number argument is left out or if the datatype of the num argument is not 'number'
     } else if (!num || typeof num !== 'number') {
        // if true, return the first element of the array
        return array[0];
     } else {
        // if no previous conditions are met, return an empty array
        return [];
     }
}

module.exports.first = first;

/**
 * last: Designed to return the number of elements from an array passed into the
 * function matching the num argument passed to the array. Elements returned will start
 * from the end of the array. If the number passed to the function is larger than
 * the length of the array, the entire array will be returned.
 * 
 * @param {Array} array: The array from which to return elements.
 * @param {Number} number: A value with datatype number.
 * 
 * @returns {Array}: Returns the number of elements from an array indicated
 * by the num parameter and starting from the last index in the array. 
 * Returns the entire array if the num argument is greater than the length of the array argument.
 * 
 * Edge Cases:
 *  1. Something other than an array is passed to the function, return an empty array
 *  2. The number argument does not have the datatype 'number' or there is no num argument, 
 * return the first element of the array.
 */
 
function last(array, num) {
    // check if the array argument is an array and the num argument is greater than 0 and that the number argument is lower than the length of the array
    if (Array.isArray(array) && num > 0 && num < array.length) {
        // if true, return the number of array elements corresponding to the num argument from the end of the array 
        return array.slice(-num, array.length);
    // check if the num argument is greater than the length of the array
    } else if (num > array.length) {
        // if true, return the array
        return array;
    // check if the number argument was left out or invalid or if the datatype of the num argument is not 'number'
    } else if (!num || typeof num !== 'number') {
        // if true, return the last element of the array
        return array[array.length - 1];
    // if no other conditions are true, return an empty array
    } else {
        return [];
    }
}

module.exports.last = last;

/**
 * indexOf: Designed to search through an input array for a given value and return
 * the first index where the value occurs. If the value is not present in the array,
 * return -1.
 * 
 * @param {Array} array: The array being searched for an input value.
 * @param {*} number: A value with any datatype to search for matches with in array.
 * 
 * @returns {Number}: Returns the index of the array argument where the value argument occurs
 * first. If the value is not found within the array, returns -1.
 * 
 * Edge Cases:
 *  1. If the value argument is present multiple times in the array, the function will only
 * return the index of the first occurance
 *  2. The value passed to the function is not present in the array, return -1
 */

function indexOf(array, value) {
    // loop through the array passed to the function
    for (let i = 0; i < array.length; i++) {
        // if the ith element of the array is strictly equal to the value passed to the function, return the index number
        if (array[i] === value) {
            return i;
        }
    }
    // if no element matches the value argument, return -1
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to search through an input array for a given value and return
 * true if the value is present and false if the value is not present in the array
 * 
 * @param {Array} array: The array being searched for an input value.
 * @param {*} number: A value with any datatype to search for matches with in array.
 * 
 * @returns {Boolean}: Returns true if the input value is found within the array with the 
 * same datatype. If a matching value is not found within the array, or if the matching value
 * has a different datatype, returns false.
 * 
 * Edge Cases:
 *  1. If the datatype of the value passed as an argument does not match that of an
 * array element, the function will return false
 *  2. If no value is passed to the function, it will return false
 */

function contains(array, value) {
    // loop through the array passed to the function
    for (let i = 0; i < array.length; i++) {
        // if an ith element is strictly equal to the value passed to the function, return true
        if (array[i] === value) {
          return true;
        }
    }
    // if there are no matching elements, return false
    return false;
}

module.exports.contains = contains;

/**
 * each: Designed to perform an action on each element of an array or each property of an object
 * based on an input function
 * 
 * @param {Collection} collection: The collection on which the action is being performed
 * @param {Function} action: A function that will perform an action on each element or property 
 * of the collection passed to to each function.
 */
 
function each(collection, func) {
    // check if the collection passed to the each function is an array
    if (Array.isArray(collection)) {
        // if array, loop through using a for loop
        for (let i = 0; i < collection.length; i++) {
            // pass each element of the array to the callback function, which should take the element, the index number, and the array as arguments
            func(collection[i], i, collection);
        } 
    // check if the collection is an object by checking for not array and datatype 'object'
    } else if (!Array.isArray(collection) && typeof collection === 'object') {
        // if true, loop through the object with a for in loop
        for (let key in collection) {
            // pass each property of the object to the callback function, which should take the value, key, and entire object as arguments
            func(collection[key], key, collection);
        }
    }   
}

module.exports.each = each;

/**
 * unique: Designed to iterate through an input array and return a new array with all duplicate elements removed.
 * The original array passed to the function remains unchanged.
 * 
 * @param {Array} array: An array to be searched for duplicate element values
 * 
 * @returns {Array}: Returns a new array with values from the input array excluding duplicates.
 */
 
function unique(array) {
    // create a newArray variable and assign to it an empty array
    let newArray = [];
    // loop through the array passed to the function
    for (let i = 0; i < array.length; i++) {
        // if the previously defined indexOf function returns -1, meaning that the element is not found within the newArray, push the element to the newArray
      if (indexOf(newArray, array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
    // return the newArray
    return newArray;
}

module.exports.unique = unique;

/**
 * filter: Designed to iterate through an input array passing each element through an input 
 * function and return a new array that inclues only those elements for which the function 
 * returns boolean true.
 * 
 * @param {Array} array: An array to run each element through a function.
 * @param {Function} action: Function will test each element of the input array based on a conditional
 * statement and return Boolean true or false based on whether or not the element passed the condition.
 * The function will take the element of the array, the index, and the entire array as arguments.
 * 
 * @returns {Array}: Returns a new array with all values from the input array that returned true when
 * passed through the input function.
 */
 
 function filter(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.filter = filter;

/**
 * reject: Designed to iterate through an input array passing each element through an input 
 * function and return a new array that inclues only those elements for which the function 
 * returns boolean false.
 * 
 * @param {Array} array: An array to run each element through a function.
 * @param {Function} action: Function will test each element of the input array based on a conditional
 * statement and return Boolean true or false based on whether or not the element passed the condition.
 * The function will take the element of the array, the index, and the entire array as arguments.
 * 
 * @returns {Array}: Returns a new array with all values from the input array that returned false when
 * passed through the input function.
 */

function reject(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.reject = reject;

/**
 * partition: Designed to iterate through an input array passing each element through an input 
 * function that returns Boolean true or false based on whether or not a condition is passed. 
 * True and false results will be separated into individual arrays, which are then pushed to a results array.
 * 
 * @param {Array} array: An array to run each element through a function.
 * @param {Function} action: Function will test each element of the input array based on a conditional
 * statement and return Boolean true or false based on whether or not the element passed the condition.
 * The function will take the element of the array, the index, and the entire array as arguments.
 * 
 * @returns {Array}: Returns a new array containing two subarrays - one for elements that evaluated to 
 * true when passed through the input function and one for elements that evaluated to false when passed through
 * the input function.
 */
 
 function partition(array, func) {
    let trueArray = [];
    let falseArray = [];
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            trueArray.push(array[i]);
        } else if (!func(array[i], i, array)) {
            falseArray.push(array[i]);
        }
    }
    results.push(trueArray, falseArray);
    return results;
}

module.exports.partition = partition;

/**
 * map: Designed to iterate through an input array passing each element through an input 
 * function that will return something.
 * 
 * @param {Collection} Collection: An array or object to run each element/property value through a function.
 * @param {Function} action: Function will take some action on each element/property value and return a new value.
 * 
 * @returns {Array}: Returns a new array containing each of the values returned from the input function when the 
 * array elements or object property values were passed through.
 */
 
function map(collection, func) {
     let newArray = [];
     if (Array.isArray(collection)) {
        // if array, loop through using a for loop
        for (let i = 0; i < collection.length; i++) {
            // pass each element of the array to the callback function, which should take the element, the index number, and the array as arguments
            newArray.push(func(collection[i], i, collection));
        } 
    // check if the collection is an object by checking for not array and datatype 'object'
    } else if (!Array.isArray(collection) && typeof collection === 'object') {
        // if true, loop through the object with a for in loop
        for (let key in collection) {
            // pass each property of the object to the callback function, which should take the value, key, and entire object as arguments
            newArray.push(func(collection[key], key, collection));
        }
    } 
    // return the new array
    return newArray;
}

module.exports.map = map;

/**
 * pluck: Designed to iterate through an input array contiaining objects and for each object 
 * within the array, push the value associated with an input property to a new array. The new array is returned.
 * 
 * @param {Array} Array: An array of objects.
 * @param {String} property: A string representing the property name to be used when pushing associated values
 * from the object to the new array.
 * 
 * @returns {Array}: Returns a new array containing the value from each object in the input array that is associated
 * with the property name passed to the function.
 */
 
 function pluck(array, prop) {
    let newArray = [];
    map(array, function(obj) {
        newArray.push(obj[prop]);
    });
    return newArray;
}

module.exports.pluck = pluck;

/**
 * every: Designed to iterate through a collection of data, pass each element or property value through
 * a function, and return true only if the function returns true for each value in the collection.
 * 
 * @param {Collection} Collection: A collection of data, may be array or object.
 * @param {Function} action: evaluate each piece of data based on a condition and return Boolean true or false value
 * 
 * @returns {Boolean}: Returns true only if every value within the collection of data resolves to true when passed
 * to the input function. If any value returns false, the entire function will return false.
 * 
 * Edge Cases: If the function argument is either left out or is not a function, return true only if each value within the 
 * collection is a truthy value.
 */
 
 function every(collection, func) {
    // first, check if no function argument is passed to the every function
    if (func === undefined) {
        // if there is no input function, check object type is 'array'
        if (Array.isArray(collection)) {
            // if array, loop through the array and return false if any element is a falsy value (true will be returned if there are no falsy values)
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        // if the object is not an array, loop through the object properties
        } else if (!Array.isArray(collection) && typeof collection === 'object') {
            for (let key in collection) {
            // if any value in the object is a falsy value, return false (true will be returned if there are no falsy values)
                if (!collection[key]) {
                    return false;
                }
            }
        }
    // if a function argument is passed, check for is array
    } else if (Array.isArray(collection)) {
        // if array, loop through using a for loop
        for (let i = 0; i < collection.length; i++) {
            // pass each element of the array to the callback function, which should take the element, the index number, and the array as arguments
            if (!func(collection[i], i, collection)){
                // if any element returns false when passed through the function, return false
                return false;
            }
        } 
    // check if the collection is an object by checking for not array and datatype 'object'
    } else if (!Array.isArray(collection) && typeof collection === 'object') {
        // if true, loop through the object with a for in loop
        for (let key in collection) {
            // pass each property of the object to the callback function, which should take the value, key, and entire object as arguments
            if (!func(collection[key], key, collection)){
                // if any value of the object returns false when passed through the function, return false
                return false;
            }
        }
    }
    // if no falsy values are found in array without function passed || no false values are returned by the input function, return true
    return true;
}

module.exports.every = every;

/**
 * some: Designed to iterate through a collection of data, pass each element or property value through
 * a function, and return true if at least one value in the collection resolves to true when passed to the
 * input function.
 * 
 * @param {Collection} Collection: A collection of data, may be array or object.
 * @param {Function} action: evaluate each piece of data based on a condition and return Boolean true or false value
 * 
 * @returns {Boolean}: Returns true if at least one value in the collection returns true when passed to the input fuction. If no 
 * values in the collection result in true, the function returns false.
 * 
 * Edge Cases: If the function argument is either left out or is not a function, return true if any of the values 
 * in the collection are truthy.
 */
 
 function some(collection, func) {
    // first, check if no function argument is passed to the every function
    if (func === undefined) {
        // if there is no input function, check object type is 'array'
        if (Array.isArray(collection)) {
            // if array, loop through the array and return true if any element is a truthy value (false will be returned if there are no truthy values)
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    return true;
                }
            }
            // if the object is not an array, loop through the object properties
        } else if (!Array.isArray(collection) && typeof collection === 'object') {
            // loop through object
            for (let key in collection) {
            // if any value in the object is a truthy value, return true (false will be returned if there are no truthy values)
                if (collection[key]){
                    return true;
                }
            }
        }
    // if a function argument is passed, check for is array
    } else if (Array.isArray(collection)) {
        // if array, loop through using a for loop
        for (let i = 0; i < collection.length; i++) {
            // pass each element of the array to the callback function, which should take the element, the index number, and the array as arguments
            if (func(collection[i], i, collection)){
                // if any element returns true when passed through the function, return true
                return true;
            }
        } 
    // check if the collection is an object by checking for not array and datatype 'object'
    } else if (!Array.isArray(collection) && typeof collection === 'object') {
        // if true, loop through the object with a for in loop
        for (let key in collection) {
            // pass each property of the object to the callback function, which should take the value, key, and entire object as arguments
            if (func(collection[key], key, collection)) {
                // if any value of the object returns true when passed through the function, return true
                return true;
            }
        }
    }
    // if no truthy values are found in array without function passed || no true values are returned by the input function, return false
    return false;
}

module.exports.some = some;

/**
 * reduce: Designed to iterate through a collection of data passing each element to an input function,  
 * and update a result variable with the return value.
 * 
 * @param {Array} Array: An array of elements
 * @param {Function} action: take a value as an argument and return a value. The function should take a starting value
 * (the previous result), an array element, and an array index as parameters.
 * @param {*} seed: A starting value of any datatype for use in the function. This is an optional parameter. If no seed 
 * is passed to the function, the starting result will be set equal to the first index of the input array and the function
 * will begin iterating through the array at index 1.
 * 
 * @returns {*}: Returns the final result after looping through the entire input array and passing each element
 * to the input funcion
 */

function reduce(array, func, seed) {
    // check if seed is not undefined
    if (seed !== undefined) {
        // if seed value passed, create a new variable called result and initialize it to the seed value
        var result = seed;
        // loop through the array starting at index 0 with the each function
        each(array, function(e, i, a) {
            // assign the result of passing each element to the function to the result variable
            result = func(result, e, i, a)
        })
        return result;
    // if 'seed' is undefined
    } else {
        // create new result variable and initialize it to the first element in the input array
        var result = array[0];
        // loop through the array starting at index 1 using the each function
        each(array, function(e, i, a) {
            // only reassign result if the index is not 0
            if (i !== 0) {
                // assign the result of passing each element to the function to the result variable
                result = func(result, e, i, a);
            }
        })
        return result;
    }
}

module.exports.reduce = reduce;

/**
 * extend: Designed to take a variable number of objects greater than or equal to 2 as arguments and update the first
 * object with all of the properties of the remaining objects.
 * 
 * @param {Object} Objects: A variable number of objects
 * 
 * @returns {*}: Returns the first object updated to include each key:value pair from all additional objects passed
 * to the function
 */
 
 function extend(...obj) {
    // create a new array containing all of the objects passed as arguments to the function
    let args = Array.from(obj);
    // create a new variable called obj1 and assign to it the first object in the arguments array
    let obj1 = args[0];
    // loop through the arguments array starting at index 1 to access the second object in the array
    for (let i = 1; i < args.length; i++) {
        // loop through each object in the array
        for (let key in args[i]) {
            // assign each property from the current object to the first object passed as an argument
            obj1[key] = args[i][key];
        } 
    }
    // return the first argument
    return obj1;
}

module.exports.extend = extend;
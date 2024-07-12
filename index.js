const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

  const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);

    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }

    return collection;
  }

  const myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection);

    const newArr = [];

    for (let i= 0; i < newCollection.length; i++) {
      newArr.push(callback(newCollection[i]));
    }

    return newArr;
  }

  const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    /*The if statement below handles the case where no start value is passed in for the accumulator.
    If acc is null, it is set equal to the first value in newCollection.
    That first value is then sliced out of newCollection since it has already been accounted for. */
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }

  const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i ++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }

    return undefined;
  }

  function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection);

    const newArr = [];

    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }

    return newArr;
  }

  function mySize(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }

  // Array Functions

  function myFirst(array, n) {
 if (n===undefined){
  return array[0];
 } else {
  return array.slice(0, n);
 }
 }

 function myLast(arr, n) {
   if (n===undefined){
    return arr[arr.length-1];
   } else if (n <=0){
    return [];
   } else {
    return arr.slice(-n)
   }
 }

  function mySortBy(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  // unpack is a helper function for myFlatten that is used when shallow is true
  // It takes each element of the input array (whether it's a primitive value or
  // an array) and pushes it into the output array
  const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }

  // Object Functions

  function myKeys(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }

  function myValues(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  }
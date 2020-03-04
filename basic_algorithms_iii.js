// #13 Number to String
//    Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'.

const negativeToString = (arr, str) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = str;
    }
  }
  return arr;
}

const rNegativeToString = (arr, str, i = 0) => {
  if (i < arr.length){
    if (arr[i] < 0){
      arr[i] = str;
      i++;
      return rNegativeToString(arr, str, i);
    }
    i++;
    return rNegativeToString(arr, str, i);
  }
  return arr;
}


// #14 Random Array
//    Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100. 

const randomArray = () => {
  let arr = [];
  let min = 0;
  let max = 101;
  for (let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (max - min)) + min;
  }
  return arr;
}

const rRandomArray = (arr = [], min = 0, max = 101, i = 0) => {
  if (arr.length > 10){
    return arr;
  };
  arr[i] = Math.floor(Math.random() * (max - min)) + min;
  i++;
  return rRandomArray(arr, min, max, i);
}


// #15 Swapping two values
//    Write a program that takes an array of numbers and returns an array where the first and last numbers in the array have been switched.

const swapValues = arr => {
  if (arr.length < 2){
    return arr;
  };
  let temp = arr[0];
  arr[0] = arr[arr.length-1];
  arr[arr.length-1] = temp;
  return arr;
}


// #16 Reversing
//     Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the values in the array.

const reverseArrayMethod = arr => {
  arr.reverse();
  return arr;
}

const reverseArray = arr => {
  if (arr.length < 2){
    return arr;
  }
  for (let i = 0; i < Math.floor((arr.length) / 2); i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}

const rReverseArray = (arr, i = 0) => {
  if (arr.length < 2 || i > Math.floor((arr.length)/2)){
    return arr;
  }
  let temp = arr[i];
  arr[i] = arr[arr.length-1-i];
  arr[arr.length-1-i] = temp;
  i++;
  return rReverseArray(arr, i);
}


// #17 Insert X in Y
//     Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2).

const spliceMethod = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
}

const insertAtIndex = (arr, item, index) => {
  for (let i = arr.length; i >= index; i--){
    arr[i] = arr[i-1];
  }
  arr[index] = item;
  return arr;
}


// #18 Remove Negatives
//     Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order. Do this without creating a temporary array; only use the pop() method to remove values from the array.

const removeNegatives = arr => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      let temp = arr[i];
      for (let j = i; j < arr.length-1; j++){
        arr[j] = arr[j+1];
      }
      arr[arr.length - 1] = temp;
      arr.pop()
    }
  }
  return arr;
}

const rRemoveNegatives = (arr, i=0) => {
  if (i > arr.length){
    return arr;
  }
  if (arr[i] < 0){
    let temp = arr[i]
    for (let j = i; j < arr.length-1; j++){
      arr[j] = arr[j+1];
    }
    arr[arr.length - 1] = temp;
    arr.pop();
    i++;
    return rRemoveNegatives(arr, i);
  }
  i++;
  return rRemoveNegatives(arr, i);
}
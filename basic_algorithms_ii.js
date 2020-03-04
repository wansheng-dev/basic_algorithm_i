// #7 Array With Only Odd Numbers. (Loop & Recursive)

const arryOddUpTo255 = () => {
  let arr = [];
  for (let i = 1; i <= 255; i += 2){
    arr.push(i);
  }
  console.log(arr);
}

const rArrayOddUpTo255 = (arr = [], i = 1) => {
  if (i <= 255){
    arr.push(i);
    i+=2;
    return rArrayOddUpTo255(arr, i);
  }
  console.log(arr);
}


// #8 Greater Than Y. (Loop & Recursive)

const greaterThanY = (arr, y) => {
  let num = 0;
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] > y){
      num ++;
    }
  }
  return num;
}

const rGreaterThanY = (arr, y, num = 0, i = 0) => {
  if (i >= arr.length){
    return num;
  }
  if (arr[i] > y){
    num ++;
  }
  i++;
  return rGreaterThanY(arr, y, num, i);
}


// #9 Square the Array Values (Loop & Recursive)

const squareValues = arr => {
  for (let i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
  }
  return arr;
}

const rSquareValues = (arr, i = 0) => {
  if (i >= arr.length){
    return arr;
  }
  arr[i] *= arr[i];
  i++;
  return rSquareValues(arr, i);
}


// #10 Eliminate Negative Numbers (Loop & Recursive)

const eliminateNegatives = arr => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 0;
    }
  }
  console.log(arr);
}

const rEliminateNegatives = (arr, i = 0) => {
  if (i >= arr.length){
    return arr;
  }
  if (arr[i] < 0){
    arr[i] = 0;
  }
  i++;
  return rEliminateNegatives(arr, i);
}


// #11 Array Max, Min, and Average (Loop & Recursive)

const maxMinAvg = arr => {
  if (arr.length != 0){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      } else if (arr[i] < min){
        min = arr[i];
      }
      sum += arr[i];
    }
    return max, min, sum/arr.length;
  }
}

const rMaxMinAvg = (arr, max = 0, min = 0, sum = 0, i = 0) => {
  if (arr.length <= 1){
    return arr[0], arr[0], arr[0];
  }
  if (i >= arr.length){
    return max, min, sum/arr.length;
  }
  if (arr[i] > max){
    max = arr[i];
  } else if (arr[i] < min){
    min = arr[i];
  }
  sum += arr[i];
  i++;
  return rMaxMinAvg(arr, max, min, sum, i);
}


// #12 Shifting the values in the array (Loop & Recursive)

const shiftFront = arr => {
  for (let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1]
  }
  arr[arr.length-1] = 0;
  return arr;
}

const rShiftFront = (arr, i = 0) => {
  if (i > arr.length - 1){
    arr[arr.length - 1] = 0;
    return arr;
  }
  arr[i] = arr[i+1];
  i++;
  return rShiftFront(arr, i);
}
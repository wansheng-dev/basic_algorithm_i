// #1 Print 1-255 (Loop & Recursive)

const print1To255 = () => {
  for(let i = 1; i <= 255 ; i++){
    console.log(i);
  }
}

const rPrint1To255 = (i = 1) => {
  if(i<=255){
    console.log(i);
    i++;
    return rPrint1To255(i);
  }
}


// #2 Print Odd Numbers 1-100 (Loop & Recursive)

const printOddUpTo100 = () => {
  for (let i = 1; i <= 100; i+=2){
    console.log(i);
  }
}

const rPrintOddUpTo100 = (i=1) => {
  if (i <= 100){
    console.log(i);
    i += 2;
    return rPrintOddUpTo100(i);
  }
}


// #3 Print Sum from 1 to 5000 (Loop & Recursive)

const printSumUpTo5000 = () => {
  let sum = 0;
  for (let i = 1; i <= 5000; i++){
    sum += i;
  }
  console.log(sum);
}

const rPrintSumUpTo5000 = (i = 1, sum = 0) => {
  if (i <= 5000){
    sum += i;
    i ++
    return rPrintSumUpTo5000(i, sum);
  }
  console.log(sum);
}


// #4 Iterating Through the Array and Print Each Element (Loop & Recursive)

const printElement = arr => {
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

const rPrintElement = (arr, i = 0) => {
  if (i < arr.length){
    console.log(arr[i]);
    i ++;
    return rPrintElement(arr, i);
  }
}


// #5 Find and Print Array Max (Loop & Recursive)

const findMax = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }
  }
  console.log(max);
}


// #6 Find and Print Array Average

const findAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum/arr.length);
}

const rFindAverage = (arr, sum = 0, i = 0) => {
  if (i < arr.length){
    sum += arr[i];
    i ++
    return rFindAverage(arr, sum, i);
  }
  console.log(sum/arr.length);
}
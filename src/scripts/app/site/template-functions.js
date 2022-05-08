import { addAction } from 'core/acts-funcs.js';
// let sum=[];
// let total;

// addAction('getValueInput', function(){
//     console.log('clicked')
//     let inputValue = document.getElementById('domTextElement').value;
//     parseInt(inputValue);
//     sum=[...sum + inputValue];
//     document.getElementById('valueInput').innerHTML = inputValue;
//     document.getElementById('sumRes').innerHTML=sum;
//
let arr = [];
let total = 0;

addAction('total', function () {
  // let inputField=document.getElementById('inputFields').value;
  console.log(arr);
  arr.forEach((element) => {
    console.log(element);
  });
  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (arr[1] == '*') {
    total = arr[0] * arr[2];
  }
   else if (arr[1] == '/') 
   {
    total = arr[0] / arr[2];
  } 
  else if (arr[1] == '+') 
  {
    total = arr[0] + arr[2];
  } 
  else if (arr[1] == '-') {
    total = arr[0] - arr[2];
  } 
  else {
    total = 'NAN';
  }
  document.getElementById('inputFields').value = total;
});
addAction('multi', function () {
    
  arr.push('*');
});
addAction('divide', function () {
  arr.push('/');
});
addAction('add', function () {
    arr.push('+');
});
addAction('min', function () {
  arr.push('-');
});
addAction('btn9', function () {
  arr.push(9);
  document.getElementById('inputFields').value = arr;
});
addAction('btn8', function () {
  arr.push(8);
  document.getElementById('inputFields').value = arr;
});
addAction('btn7', function () {
  arr.push(7);
  document.getElementById('inputFields').value = arr;
});
addAction('btn6', function () {
  arr.push(6);
  document.getElementById('inputFields').value = arr;
});
addAction('btn5', function () {
  arr.push(5);
  document.getElementById('inputFields').value = arr;
});
addAction('btn4', function () {
  arr.push(4);
  document.getElementById('inputFields').value = arr;
});
addAction('btn3', function () {
  arr.push(3);
  document.getElementById('inputFields').value = arr;
});
addAction('btn2', function () {
  arr.push(2);
  document.getElementById('inputFields').value = arr;
});
addAction('btn1', function () {
  arr.push(1);
  document.getElementById('inputFields').value = arr;
});

#!/usr/bin/node
const myNum = parseInt(process.argv[2]);
if (isNaN(myNum)) {
  console.log('Not a Number');
} else {
  console.log('My number: ' + myNum);
}

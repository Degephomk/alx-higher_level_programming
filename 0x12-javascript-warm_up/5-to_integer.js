#!/usr/bin/node
const mynum = parseInt(process.argv[2]);
if (isNaN(mynum)) {
  console.log('Not a Number');
} else {
  console.log('My number: ' + mynum);
}

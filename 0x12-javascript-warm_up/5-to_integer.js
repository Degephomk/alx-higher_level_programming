#!/usr/bin/node
const mynum = parseInt(process.arg[2]);
if (isNaN(mynum)) {
  console.log('Not a Number');
} else {
  console.log(mynum);
}

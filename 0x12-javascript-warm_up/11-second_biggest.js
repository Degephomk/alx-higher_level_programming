#!/usr/bin/node
const num = process.argv;
if (num.length <= 3) {
  console.log(0);
} else {
  console.log(num.sort((x, y) => y - x).slice(3)[0]);
}

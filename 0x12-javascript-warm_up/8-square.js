#!/usr/bin/node
const x = parseInt(process.argv[2]);
let i, j;
if (isNaN(x)) {
  console.log('Missing size');
} else {
  for (i = 0; i < x; i++) {
    for (j = 0; j < x; j++) {
      process.stdout.write('X');
    }
    console.log();
  }
}

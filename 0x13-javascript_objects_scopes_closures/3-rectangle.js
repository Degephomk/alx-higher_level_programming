#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let rows = 'X'; let i; let j;
    for (i = 0; i < this.width - 1; i++) {
      rows += 'X';
    }
    for (j = 0; j < this.height; j++) {
      console.log(rows);
    }
  }
};

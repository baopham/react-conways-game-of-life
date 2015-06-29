
export default {

  generateEmptyBoard(numrows, numcols) {

    let rows = [];
    for (let y = 0; y < numrows; y++) {
      let cols = [];

      for (let x = 0; x < numcols; x++) {
        cols.push(0);
      }

      rows.push(cols);
    }

    return rows;

  },

  fillinAliveCells(rows, aliveCoords) {
    for (let i = 0; i < aliveCoords.length; i++) {
      let [x, y] = aliveCoords[i];
      rows[y][x] = 1;
    }
  }

};

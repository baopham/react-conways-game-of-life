import Helpers from './board-helpers.js';

export default {

  rows() {
    let numrows = 18, numcols = 18;
    let rows = Helpers.generateEmptyBoard(numrows, numcols);
    let aliveCoords = [
      [5, 7],
      [5, 9],
      [4, 9],
      [7, 8],
      [8, 9],
      [9, 9],
      [10, 9]
    ];

    Helpers.fillinAliveCells(rows, aliveCoords);

    return rows;
  }

};

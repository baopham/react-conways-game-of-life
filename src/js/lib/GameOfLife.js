'use strict';

const GameOfLife = class {

  /**
   * @param array rows
   * 1 as alive, 0 as dead.
   * e.g:
   * [
   *   [1, 0, 0],
   *   [1, 0, 1],
   *   [1, 0, 1]
   * ]
   */
  constructor(rows) {
    this.rows = rows;
  }

  cloneRows() {
    return JSON.parse(JSON.stringify(this.rows));
  }

  /**
   * Rules:
   * 1) Any live cell with fewer than two live neighbours dies, as if caused by under-population.
   * 2) Any live cell with two or three live neighbours lives on to the next generation.
   * 3) Any live cell with more than three live neighbours dies, as if by overcrowding.
   * 4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
   *
   * Mark 1 as alive, 0 as dead.
   */
  nextGeneration() {

    this.originalRows = this.cloneRows();

    for (let y = 0; y < this.rows.length; y++) {
      let cols = this.rows[y];
      for (let x = 0; x < cols.length; x++) {
        let cell = cols[x];
        let aliveNeighbourCount = this.getAliveNeighbourCount(x, y);

        if (cell) {
          if (aliveNeighbourCount < 2 || aliveNeighbourCount > 3) {
            this.rows[y][x] = 0;
          }
        }
        else {
          if (aliveNeighbourCount == 3) {
            this.rows[y][x] = 1;
          }
        }
      }
    }

  }

  getAliveNeighbourCount(x, y) {
    let neighbourCoords = [
      [x-1, y-1],
      [x, y-1],
      [x, y+1],
      [x+1, y-1],
      [x+1, y],
      [x+1, y+1],
      [x-1, y],
      [x-1, y+1]
    ];

    let aliveNeighbourCount = 0;

    for (let i = 0; i < neighbourCoords.length; i++) {
      let [x, y] = neighbourCoords[i];

      if (y >= this.originalRows.length || y < 0) continue;
      if (x >= this.originalRows[0].length || x < 0) continue;

      if (this.originalRows[y][x]) {
        aliveNeighbourCount++;
      }
    }

    return aliveNeighbourCount;
  }

};

export default GameOfLife;

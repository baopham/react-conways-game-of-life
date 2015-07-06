'use strict';

const GameOfLife = class {

  /**
   * @param object board
   *
   * e.g:
   * {
   *   numrows: 10,
   *   numcols: 10,
   *   aliveCoords: {
   *     5: {9: null, 10: null, 11: null}, // {y: {x1: null, x2: null ...}}
   *   }
   * }
   */
  constructor(board) {
    this.board = board;
    this.alive = null;
  }

  clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Rules:
   * 1) Any live cell with fewer than two live neighbours dies, as if caused by under-population.
   * 2) Any live cell with two or three live neighbours lives on to the next generation.
   * 3) Any live cell with more than three live neighbours dies, as if by overcrowding.
   * 4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
   */
  nextGeneration() {

    this.originalAliveCoords = this.clone(this.board.aliveCoords);
    this.alive = 0;

    let allDeadNeighbours = {};

    // Loop through alive coords.
    for (let y in this.board.aliveCoords) {
      // Get hash of all x coords with the same y coord.
      y = parseInt(y, 10);
      let xHash = this.board.aliveCoords[y];

      for (let x in xHash) {
        x = parseInt(x, 10);
        let neighbourCoords = this.getNeighbourCoords(x, y);

        let aliveNeighbourCount = this.getAliveNeighbourCount(x, y, neighbourCoords);

        // Under-population or overcrowding...
        if (aliveNeighbourCount < 2 || aliveNeighbourCount > 3) {
          this.removeFromAliveCoords(x, y, this.board.aliveCoords);
        }
        else {
          this.alive++;
        }

        // Keep count of dead neighbours.
        for (let n = 0; n < neighbourCoords.length; n++) {
          let [x, y] = neighbourCoords[n];

          if (x >= this.board.numcols || x < 0) continue;
          if (y >= this.board.numrows || y < 0) continue;

          if (!this.isCellAlive(x, y, this.originalAliveCoords)) {
            let key = x + ',' + y;

            if (allDeadNeighbours[key] === undefined) {
              allDeadNeighbours[key] = 0;
            }

            allDeadNeighbours[key]++;
          }

        }

      }

    }

    // Check for reproduction case.
    for (let key in allDeadNeighbours) {
      if (allDeadNeighbours[key] === 3) {
        let coords = key.split(',');
        let [x, y] = [parseInt(coords[0], 10), parseInt(coords[1], 10)];

        this.addToAliveCoords(x, y, this.board.aliveCoords);
        this.alive++;
      }
    }

  }

  isCellAlive(x, y, aliveCoords) {
    return aliveCoords[y] !== undefined && aliveCoords[y][x] !== undefined;
  }

  addToAliveCoords(x, y, aliveCoords) {
    if (aliveCoords[y] === undefined) {
      aliveCoords[y] = {};
    }

    aliveCoords[y][x] = null;
  }

  removeFromAliveCoords(x, y, aliveCoords) {
    delete aliveCoords[y][x];

    if (Object.keys(aliveCoords[y]).lengh == 0) {
      delete this.board.aliveCoords[y];
    }
  }

  getNeighbourCoords(x, y) {
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

    return neighbourCoords;
  }

  getAliveNeighbourCount(x, y, neighbourCoords) {
    let aliveNeighbourCount = 0;

    for (let i = 0; i < neighbourCoords.length; i++) {
      let [neighbourX, neighbourY] = neighbourCoords[i];

      if (this.isCellAlive(neighbourX, neighbourY, this.originalAliveCoords)) {
        aliveNeighbourCount++;
      }

    }

    return aliveNeighbourCount;
  }

};

export default GameOfLife;

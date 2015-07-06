
export default {

  /**
   * Board:
   *   [1, 0, 0],
   *   [1, 1, 0],
   *   [0, 0, 1]
   */
  board() {
    return {
      numrows: 3,
      numcols: 3,
      aliveCoords: {
        0: {0: null},
        1: {0: null, 1: null},
        2: {2: null}
      },
      alive: 4
    };
  },

  /**
   * Board:
   *   [1, 1, 0],
   *   [1, 1, 0],
   *   [0, 1, 0]
   */
  firstGeneration() {
    return {
      numrows: 3,
      numcols: 3,
      aliveCoords: {
        0: {0: null, 1: null},
        1: {0: null, 1: null},
        2: {1: null}
      },
      alive: 5
    };
  },

  /**
   * Board:
   *   [1, 1, 0],
   *   [0, 0, 1],
   *   [1, 1, 0]
   */
  secondGeneration() {
    return {
      numrows: 3,
      numcols: 3,
      aliveCoords: {
        0: {0: null, 1: null},
        1: {2: null},
        2: {0: null, 1: null}
      },
      alive: 5
    };
  },

  /**
   * Board:
   *   [0, 1, 0],
   *   [0, 0, 1],
   *   [0, 1, 0]
   */
  thirdGeneration() {
    return {
      numrows: 3,
      numcols: 3,
      aliveCoords: {
        0: {1: null},
        1: {2: null},
        2: {1: null}
      },
      alive: 3
    };
  }

};


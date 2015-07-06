
export default {

  rows() {
    return [
      [1, 0, 0],
      [1, 1, 0],
      [0, 0, 1]
    ];
  },

  firstGeneration() {
    let rows = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ];

    let live = 5;

    return [rows, live];
  },

  secondGeneration() {
    let rows = [
      [1, 1, 0],
      [0, 0, 1],
      [1, 1, 0]
    ];

    let live = 5;

    return [rows, live];
  },

  thirdGeneration() {
    let rows = [
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0]
    ];

    let live = 3;

    return [rows, live];
  }

};


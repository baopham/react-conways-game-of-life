
export default {

  rows() {
    return [
      [1, 0, 0],
      [1, 1, 0],
      [0, 0, 1]
    ];
  },

  firstGeneration() {
    return [
      [1, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ];
  },

  secondGeneration() {
    return [
      [1, 1, 0],
      [0, 0, 1],
      [1, 1, 0]
    ];
  },

  thirdGeneration() {
    return [
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0]
    ];
  },

};


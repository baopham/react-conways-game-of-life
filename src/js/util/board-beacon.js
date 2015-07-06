
export default {

  board() {
    let numrows = 6, numcols = 6;
    let aliveCoords = {
      1: {1: null, 2: null},
      2: {1: null, 2: null},
      3: {3: null, 4: null},
      4: {3: null, 4: null}
    };

    return {
      numrows: numrows,
      numcols: numcols,
      aliveCoords: aliveCoords
    };
  }

};


export default {

  board() {
    let numrows = 9, numcols = 9;
    let aliveCoords = {
      1: {3: null},
      2: {4: null},
      3: {2: null, 3: null, 4: null}
    };

    return {
      numrows: numrows,
      numcols: numcols,
      aliveCoords: aliveCoords
    };
  }

};

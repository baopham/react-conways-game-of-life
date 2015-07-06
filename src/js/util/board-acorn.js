
export default {

  board() {
    let numrows = 18, numcols = 18;
    let aliveCoords = {
      9: {4: null, 5: null, 8: null, 9: null, 10: null},
      7: {5: null},
      8: {7: null}
    };

    return {
      numrows: numrows,
      numcols: numcols,
      aliveCoords: aliveCoords
    };
  }

};

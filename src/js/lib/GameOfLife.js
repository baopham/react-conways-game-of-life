
const GameOfLife = {

  run(rows) {
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      for (let j = 0; j < row.cols.length; j++) {
        let col = row.cols[j];
        col.alive = !!Math.round(Math.random());
      }
    }
  }

};

export default GameOfLife;


jest.dontMock('../lib/GameOfLife.js');
jest.dontMock('../util/board-3x3.js');

var GameOfLife = require('../lib/GameOfLife.js');
var Board = require('../util/board-3x3.js');

describe('Game Of Life for 3x3 board', function () {

  it('generates correct first generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();

    expect(gol.rows).toEqual(Board.firstGeneration());
  });

  it('generates correct second generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();
    gol.nextGeneration();

    expect(gol.rows).toEqual(Board.secondGeneration());
  });

  it('generates correct third generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();
    gol.nextGeneration();
    gol.nextGeneration();

    expect(gol.rows).toEqual(Board.thirdGeneration());
  });

});

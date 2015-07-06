
jest.dontMock('../lib/GameOfLife.js');
jest.dontMock('../util/board-3x3.js');

var GameOfLife = require('../lib/GameOfLife.js');
var Board = require('../util/board-3x3.js');

describe('Game Of Life for 3x3 board', function () {

  it('generates correct first generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();

    let expectedRows, expectedLive;
    [expectedRows, expectedLive] = Board.firstGeneration();

    expect(gol.rows).toEqual(expectedRows);
  });

  it('generates correct second generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();
    gol.nextGeneration();

    let expectedRows, expectedLive;
    [expectedRows, expectedLive] = Board.secondGeneration();

    expect(gol.rows).toEqual(expectedRows);
  });

  it('generates correct third generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();
    gol.nextGeneration();
    gol.nextGeneration();

    let expectedRows, expectedLive;

    [expectedRows, expectedLive] = Board.thirdGeneration();

    expect(gol.rows).toEqual(expectedRows);
  });

});

describe('Game Of Life getting number of live cells for 3x3 board', function () {

  it('has correct number of live cells for first generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();

    [expectedRows, expectedLive] = Board.firstGeneration();

    expect(gol.live).toEqual(expectedLive);
  });

  it('has correct number of live cells for second generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();
    gol.nextGeneration();

    let expectedRows, expectedLive;

    [expectedRows, expectedLive] = Board.secondGeneration();

    expect(gol.live).toEqual(expectedLive);
  });

  it('has correct number of live cells for third generation', function () {
    let gol = new GameOfLife(Board.rows());

    gol.nextGeneration();
    gol.nextGeneration();
    gol.nextGeneration();

    let expectedRows, expectedLive;

    [expectedRows, expectedLive] = Board.thirdGeneration();

    expect(gol.live).toEqual(expectedLive);

  });

});

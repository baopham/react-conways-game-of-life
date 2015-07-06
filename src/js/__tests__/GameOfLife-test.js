
jest.dontMock('../lib/GameOfLife.js');
jest.dontMock('../util/board-3x3.js');

var GameOfLife = require('../lib/GameOfLife.js');
var Board = require('../util/board-3x3.js');

describe('Game Of Life for 3x3 board', function () {

  it('generates correct first generation', function () {
    let gol = new GameOfLife(Board.board());

    gol.nextGeneration();

    let {aliveCoords} = Board.firstGeneration();

    expect(gol.board.aliveCoords).toEqual(aliveCoords);
  });

  it('generates correct second generation', function () {
    let gol = new GameOfLife(Board.board());

    gol.nextGeneration();
    gol.nextGeneration();

    let {aliveCoords} = Board.secondGeneration();

    expect(gol.board.aliveCoords).toEqual(aliveCoords);
  });

  it('generates correct third generation', function () {
    let gol = new GameOfLife(Board.board());

    gol.nextGeneration();
    gol.nextGeneration();
    gol.nextGeneration();

    let {aliveCoords} = Board.thirdGeneration();

    expect(gol.board.aliveCoords).toEqual(aliveCoords);
  });

});

describe('Game Of Life getting number of live cells for 3x3 board', function () {

  it('has correct number of live cells for first generation', function () {
    let gol = new GameOfLife(Board.board());

    gol.nextGeneration();

    let {aliveCoords, alive} = Board.firstGeneration();

    expect(gol.alive).toEqual(alive);
  });

  it('has correct number of live cells for second generation', function () {
    let gol = new GameOfLife(Board.board());

    gol.nextGeneration();
    gol.nextGeneration();

    let expectedRows, expectedLive;

    let {aliveCoords, alive} = Board.secondGeneration();

    expect(gol.alive).toEqual(alive);
  });

  it('has correct number of live cells for third generation', function () {
    let gol = new GameOfLife(Board.board());

    gol.nextGeneration();
    gol.nextGeneration();
    gol.nextGeneration();

    let expectedRows, expectedLive;

    let {aliveCoords, alive} = Board.thirdGeneration();

    expect(gol.alive).toEqual(alive);
  });

});

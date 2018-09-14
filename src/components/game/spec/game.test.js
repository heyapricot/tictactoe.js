const {game} = require('../game');
const {gameboard} = require('../../gameboard/gameboard');
const {playerFactory} = require('../../player/player');

describe("game", ()=>{
   let gboard = gameboard;
   let players = [playerFactory("First", "X"), playerFactory("Second", "O")];
   game.setBoard(gboard);
   it("has a gameboard", ()=>{
       expect(game.getBoard()).toBe(gboard);
   });
});
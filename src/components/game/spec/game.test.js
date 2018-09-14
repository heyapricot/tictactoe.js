const {game} = require('../game');
const {gameboard} = require('../../gameboard/gameboard');
const {playerFactory} = require('../../player/player');

describe("game", ()=>{
    beforeEach(()=>{
        game.getBoard().reset;
    });
    let gboard = gameboard;
    let players = [playerFactory("First", "X"), playerFactory("Second", "O")];
    game.setBoard(gboard);
    game.setPlayers(players);
    it("has a gameboard", ()=>{
        expect(game.getBoard()).toBe(gboard);
    });
    it("has Players", ()=>{
        expect(game.getPlayers()).toBe(players);
    });
    it("can set a move in the board", ()=>{
        game.setMove([0,0]);
        expect(game.getBoard().cells()).toEqual([["X", NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]]);
    })
});
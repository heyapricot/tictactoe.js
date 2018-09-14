const {game} = require('../game');
const {gameboard} = require('../../gameboard/gameboard');
const {playerFactory} = require('../../player/player');

describe("game", ()=>{
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
    describe("setMove", ()=>{
        beforeEach(()=>{ game.reset() });
        it("can set a move in the board", ()=>{
            game.setMove([0,0]);
            expect(game.getBoard().cells()).toEqual([[players[0].token, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]]);
        });
        it("alternates between players", ()=>{
            game.setMove([0,0]);
            game.setMove([1,1]);
            game.setMove([1,0]);
            game.setMove([2,2]);
            expect(game.getBoard().cells()).toEqual([[players[0].token, players[0].token, NaN], [NaN, players[1].token , NaN], [NaN, NaN, players[1].token]]);
        })
        it("doesn't allow overwriting", ()=>{
           game.setMove([0,0]);
           game.setMove([0,0]);
           game.setMove([0,1]);
           expect(game.getBoard().cells()).toEqual([[players[0].token, NaN, NaN], [players[1].token, NaN, NaN], [NaN, NaN, NaN]]);
        });
    });
});
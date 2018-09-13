const {gameboard} = require('../gameboard');

describe("gameboard",()=>{
    const identifier_one = "X";
    const identifier_two = "O";
    it("can get an array representation of cells in the board", ()=>{
        expect(gameboard.cells()).toEqual([[NaN, NaN, NaN],[NaN, NaN, NaN],[NaN, NaN, NaN]])
    });
    it("can write to a specific coordinate",()=>{
        gameboard.write([0,0],identifier_one);
        expect(gameboard.cellAt([0,0])).toEqual(identifier_one);
    })
})
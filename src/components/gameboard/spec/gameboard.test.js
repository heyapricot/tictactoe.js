const {gameboard} = require('../gameboard');

describe("gameboard",()=>{
    const identifier_one = "X";
    const identifier_two = "O";
    const width = height = 3;
    it("can get an array representation of cells in the board", ()=>{
        expect(gameboard.cells()).toEqual([[NaN, NaN, NaN],[NaN, NaN, NaN],[NaN, NaN, NaN]])
    });
    it("can write to a specific coordinate",()=>{
        gameboard.write([0,0],identifier_one);
        expect(gameboard.cellAt([0,0])).toEqual(identifier_one);
    });
    it("can tell when the board is full", ()=>{
        for(let i = 0; i<width; i++){
            for(let j = 0; j < height; j++){
                gameboard.write([0,0],identifier_one);
            }
        }
        expect(gameboard.isFull()).toEqual(true)
    })
});
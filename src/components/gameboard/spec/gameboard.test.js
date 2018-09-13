const {gameboard} = require('../gameboard');

describe("gameboard",()=>{
    const identifiers = ["X", "O"];
    const width = height = 3;
    it("can get an array representation of cells in the board", ()=>{
        expect(gameboard.cells()).toEqual([[NaN, NaN, NaN],[NaN, NaN, NaN],[NaN, NaN, NaN]])
    });
    it("can write to a specific coordinate",()=>{
        gameboard.write([0,0],identifiers[0]);
        expect(gameboard.cellAt([0,0])).toEqual(identifiers[0]);
    });
    it("can tell when the board is full", ()=>{
        for(let i = 0; i<width; i++){
            for(let j = 0; j < height; j++){
                gameboard.write([0,0],identifiers[0]);
            }
        }
        expect(gameboard.isFull()).toEqual(true)
    });
    describe("hasSequence",()=>{
        it("is true when a row has a sequence of N identifiers", ()=>{
            for(let i = 0; i < width; i++){
                gameboard.write([i,0], identifiers[1]);
            }
            expect(gameboard.hasSequence()).toEqual(true)
        })
    })
});
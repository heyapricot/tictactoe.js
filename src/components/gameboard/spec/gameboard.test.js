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
                let identifier = identifiers[(j + i) % 2];
                gameboard.write([j,i],identifier);
            }
        }
        expect(gameboard.cells()).toEqual([[identifiers[0], identifiers[1], identifiers[0]], [identifiers[1], identifiers[0], identifiers[1]], [identifiers[0], identifiers[1], identifiers[0]]]);
        expect(gameboard.isFull()).toEqual(true)
    });
    describe("hasSequence",()=>{
        beforeEach(()=>{
           gameboard.reset();
        });
        it("returns true when a row has a sequence of N identifiers", ()=>{
            for(let i = 0; i < width; i++){
                gameboard.write([i,0], identifiers[1]);
            }
            expect(gameboard.hasSequence()).toEqual(true)
        });
        it("returns true when a column has a sequence of N identifiers", ()=>{
            for(let i = 0; i < width; i++){
                gameboard.write([0,i], identifiers[0]);
            }
            expect(gameboard.hasSequence()).toEqual(true)
        });
        it("returns true when there is a diagonal sequence of N identifiers", ()=>{
           for(let i = 0; i < width; i++){
               gameboard.write([i,i], identifiers[0]);
           }
           //expect(gameboard.cells()).toEqual([[identifiers[0],NaN, NaN],[NaN, identifiers[0], NaN],[NaN, NaN, identifiers[0]]])
            expect(gameboard.hasSequence()).toEqual(true)
        });
        it("returns true when there is an inverse diagonal sequence of N identifiers", ()=>{
            for(let i = 0; i < width && i < height; i++){
                gameboard.write([i,height - 1 - i], identifiers[0]);
            }
            //expect(gameboard.cells()).toEqual([[NaN, NaN, identifiers[0]],[NaN, identifiers[0], NaN],[identifiers[0],NaN, NaN]])
            expect(gameboard.hasSequence()).toEqual(true)
        })
    })
});
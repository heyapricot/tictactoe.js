const {gameboard} = require('../gameboard');

describe("gameboard",()=>{
    const identifier_one = "X";
    const identifier_two = "O";
    it("can get an array representation of cells in the board", ()=>{
        expect(gameboard.cells()).toEqual([[[],[],[]],[[],[],[]],[[],[],[]]])
    });
    xit("can get a specific coordinate", ()=>{
        expect(gameboard.getObjectAt([0])).toBe("X");
    });
    xit("can write to a specific coordinate",()=>{
        gameboard.write([0,0],identifier_one);
        expect(gameboard.getObjectAt([0,0])).toBe(identifier_one);
    })
})
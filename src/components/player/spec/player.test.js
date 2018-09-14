const {playerFactory} = require('../player');

describe("playerFactory", ()=>{
    let name = "PlayerOne";
    let token = "X";
    const playerOne = playerFactory(name, token);
    it("has a name", ()=>{ expect(playerOne.name).toEqual(name)});
    it("has an identifier", ()=>{ expect(playerOne.token).toEqual(token)});
});
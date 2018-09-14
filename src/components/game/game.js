const game = (()=>{
    let turn = 0;
    let _gameBoard = NaN;
    const getBoard = () =>{
        return _gameBoard;
    };
    const setBoard = (board)=> {
        _gameBoard = board;
    };
    const myFunc = (a,b) => a + b;
    return {getBoard, setBoard}
})();

module.exports = {
    game: game
};
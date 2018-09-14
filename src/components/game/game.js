const game = (()=>{
    let turn = 0;
    let _gameBoard = NaN;
    let _players = NaN;
    const getBoard = () =>{
        return _gameBoard;
    };
    const getPlayers = () =>{
        return _players;
    };
    const setBoard = (board)=> {
        _gameBoard = board;
    };
    const setPlayers = (players) => {
        _players = players;
    };
    const myFunc = (a,b) => a + b;
    return {getBoard, getPlayers, setBoard, setPlayers}
})();

module.exports = {
    game: game
};
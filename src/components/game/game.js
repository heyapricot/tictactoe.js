const game = (()=>{
    const _afterSetMove = ()=>{
        _turn++;
    };
    const _currentPlayer = (turn = _turn, players = _players)=>{
        return players[turn % players.length];
    };
    const getBoard = () =>{
        return _gameBoard;
    };
    const getPlayers = () =>{
        return _players;
    };
    const reset = ()=>{
        _gameBoard.reset();
        _turn = 0;
    };
    const setBoard = (board)=> {
        _gameBoard = board;
    };
    const setMove = (coordinates, gameboard = _gameBoard, player = _currentPlayer(), callback = _afterSetMove) => {
        gameboard.write(coordinates, player.token);
        callback();
    };
    const setPlayers = (players) => {
        _players = players;
    };
    let _turn = 0;
    let _gameBoard = NaN;
    let _players = NaN;
    return {getBoard, getPlayers, reset, setBoard, setMove, setPlayers}
})();

module.exports = {
    game: game
};
const game = (()=>{
    const _currentPlayer = (turn = _turn, players = _players)=>{
        return players[turn % players.length];
    };
    const getBoard = () =>{
        return _gameBoard;
    };
    const getPlayers = () =>{
        return _players;
    };
    const setBoard = (board)=> {
        _gameBoard = board;
    };
    const setMove = (coordinates, gameboard = _gameBoard) => {
        gameboard.write(coordinates, _currentPlayer().token);
    };
    const setPlayers = (players) => {
        _players = players;
    };
    let _turn = 0;
    let _gameBoard = NaN;
    let _players = NaN;
    return {getBoard, getPlayers, setBoard, setMove, setPlayers}
})();

module.exports = {
    game: game
};
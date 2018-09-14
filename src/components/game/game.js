const game = (()=>{
    const _afterSetMove = ()=>{
        _checkGameEnd();
        _turn++;
    };
    const _currentPlayer = (turn = _turn, players = _players)=>{ return players[turn % players.length] };
    const _checkGameEnd = ()=>{
        if(_gameBoard.hasSequence()){
            _hasEnded = true;
            return [_hasEnded, _currentPlayer()]
        }
        else if (_gameBoard.isFull()) {
            _hasEnded = true;
            return [_hasEnded];
        }
    };
    const getBoard = () =>{ return _gameBoard };
    const getPlayers = () =>{ return _players };
    const hasEnded = ()=> { return _hasEnded };
    const reset = ()=>{
        _gameBoard.reset();
        _turn = 0;
    };
    const setBoard = (board)=> {
        _gameBoard = board;
    };
    const setMove = (coordinates, gameboard = _gameBoard, player = _currentPlayer(), callback = _afterSetMove) => {
        if(Number.isNaN(gameboard.cellAt(coordinates))){
            gameboard.write(coordinates, player.token);
            callback();
        }
    };
    const setPlayers = (players) => {
        _players = players;
    };
    let _turn = 0;
    let _gameBoard = NaN;
    let _hasEnded = false;
    let _players = NaN;
    return {getBoard, getPlayers, hasEnded, reset, setBoard, setMove, setPlayers}
})();

module.exports = {
    game: game
};
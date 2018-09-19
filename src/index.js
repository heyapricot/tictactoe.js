const {holdButtonFactory} = require('./components/holdButton/holdButton');
const {bootstrapGridElement} = require('./components/bootstrapGridElement/bootstrapGridElement');
const {game} = require('./components/game/game');
const {gameboard} = require('./components/gameboard/gameboard');
const {playerFactory} = require('./components/player/player');
const mainContainer = document.getElementById('mainContainer');
const gridContainer = document.getElementById('gridContainer');
const resetContainer = document.getElementById('resetContainer');
let cells = [];
const buttonClasses = [["btn-primary"], ["btn-warning"]];
const icons = [["fas", "fa-times", "fa-2x"], ["far", "fa-circle", "fa-2x"]];
let gboard = gameboard;
let players = [playerFactory("First", "X"), playerFactory("Second", "O")];
game.setBoard(gboard);
game.setPlayers(players);
const getCellCoordinates = (cell, rowQuantity = 3, columnQuantity = 3 )=>{
    let arrIndex = cells.indexOf(cell);
    let h = Math.floor(arrIndex / rowQuantity);
    let w = arrIndex % columnQuantity;
    return [w,h]
};
const onCellClick = (cell)=>{
    if(!game.hasEnded()){
        let turn = game.getTurn();
        cell.setIcon(icons[turn % 2]);
        cell.setCssClass(buttonClasses[turn % 2]);
        let coords = getCellCoordinates(cell);
        game.setMove(coords);
        if(game.hasEnded()){
            onGameEnd();
        }
        console.log(game.getBoard().cells());
    }
};
const onGameEnd = ()=>{
    if(Number.isNaN(game.winner())){
        alert(`Tie`)
    }
    else
    {
        alert(`Winner is: ${game.winner().name}`)
    }
};
const onResetButtonClick = ()=>{
    cells.forEach((cell)=>{
        cell.reset();
    });
    game.reset();
};
const generateGrid = ((rowQuantity = 3, columnQuantity = 3)=>{
    for(let i = 0; i < rowQuantity; i++){
        let row = bootstrapGridElement('row',[], gridContainer);
        let column = bootstrapGridElement('col', ["d-flex", "justify-content-center"], row.getHtmlNode());
        const generateHoldButtons = (()=>{
            let buttonRowContainer = document.createElement('div');
            column.setChildNode(buttonRowContainer);
            for(let j = 0; j < columnQuantity; j++){
                let button = holdButtonFactory();
                cells.push(button);
                button.setParent(buttonRowContainer);
            }
        })();
    }
})();
const generateResetButton = (()=>{
   let row = bootstrapGridElement("row",["my-3"],resetContainer);
   let column = bootstrapGridElement("col", ["d-flex", "justify-content-center"], row.getHtmlNode());
   const setupButton = (()=>{
       let buttonContainer = document.createElement('div');
       column.setChildNode(buttonContainer);
       let button = document.createElement('button');
       button.addEventListener('click', onResetButtonClick);
       buttonContainer.appendChild(button);
       ["btn", "btn-success"].forEach((cssClass)=>{button.classList.toggle(cssClass)});
       let icon = (()=>{
           let i = document.createElement('i');
           ["fas", "fa-redo-alt"].forEach((cssClass)=>{i.classList.toggle(cssClass)});
           return i;
       })();
       button.appendChild(icon);
   })();
})();
const initCells = (()=>{
    cells.forEach((cell)=>{
        cell.addClickFunction(onCellClick.bind(this, cell));
    });
})();
const setupInput = (()=>{
    let inputOne = document.getElementById('playerOne');
    let inputTwo = document.getElementById('playerTwo');
    const setPlayerName = ()=>{
        console.log("Entered set name");
        players[0].name = inputOne.value;
        console.log(`inputOne.value: ${inputOne.value}, P1 name; ${players[0].name}`);
        players[1].name = inputTwo.value;
        console.log(`inputTwo.value: ${inputTwo.value}, P2 name; ${players[1].name}`);
    };
    inputOne.addEventListener('blur', setPlayerName);
    inputTwo.addEventListener('blur', setPlayerName);
})();
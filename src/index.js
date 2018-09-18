const {holdButtonFactory} = require('./components/holdButton/holdButton');
const mainContainer = document.getElementById('mainContainer');
let cells = [];
const buttonClasses = [["btn-primary"], ["btn-warning"]];
const icons = [["fas", "fa-times", "fa-2x"], ["far", "fa-circle", "fa-2x"]];
let turn = 0;
const onCellClick = (cell)=>{
    cell.setIcon(icons[turn % 2]);
    cell.setCssClass(buttonClasses[turn % 2]);
    turn++;
};
const generateGrid = (()=>{
    let rowQuantity = 3;
    let columnQuantity = 3;
    for(let i = 0; i < rowQuantity; i++){
        let row = document.createElement('div');
        ["row"].forEach((cssClass)=>{ row.classList.toggle(cssClass) });
        mainContainer.appendChild(row);
        let column = document.createElement('div');
        ["col", "d-flex", "justify-content-center"].forEach((cssClass)=>{ column.classList.toggle(cssClass) });
        row.appendChild(column);
        const generateHoldButtons = (()=>{
            let buttonRowContainer = document.createElement('div');
            column.appendChild(buttonRowContainer);
            for(let j = 0; j < columnQuantity; j++){
                let button = holdButtonFactory();
                cells.push(button);
                button.setParent(buttonRowContainer);
            }
        })();
    }
})();
const initCells = (()=>{
    cells.forEach((cell)=>{
        cell.addClickFunction(onCellClick.bind(this, cell));
    });
})();
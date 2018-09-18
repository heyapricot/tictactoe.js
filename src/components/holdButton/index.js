const {holdButtonFactory} = require('./holdButton');
let main = document.getElementById('main');
const gameMove = (cell)=>{
    cell.setIcon(icons[turn % 2]);
    cell.setCssClass(buttonClasses[turn % 2]);
    turn++;
};
const buttonClasses = [["btn-primary"], ["btn-warning"]];
const icons = [["fas", "fa-times", "fa-2x"], ["far", "fa-circle", "fa-2x"]];
let turn = 0;
const cells = [];
const cellQuantity = 2;
for(let i = 0; i < cellQuantity; i++){
    cells[i] = holdButtonFactory();
    cells[i].addClickFunction(gameMove.bind(this, cells[i]));
    cells[i].setParent(main);
}
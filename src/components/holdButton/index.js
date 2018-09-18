const {holdButtonFactory} = require('./holdButton');
let main = document.getElementById('main');
const cell = holdButtonFactory('btn-success');
const writeIconToCell = ()=>{
    cell.setIcon(["fas", "fa-heart"]);
    console.log("Im fn write IconToCell");
};
cell.addClickFunction(writeIconToCell);
cell.setParent(main);

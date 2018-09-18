const {holdButtonFactory} = require('./components/holdButton/holdButton');
const {bootstrapGridElement} = require('./components/bootstrapGridElement/bootstrapGridElement');
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
const resetCells = ()=>{
    cells.forEach((cell)=>{
        cell.reset();
    })
};
const generateGrid = (()=>{
    let rowQuantity = 3;
    let columnQuantity = 3;
    for(let i = 0; i < rowQuantity; i++){
        let row = bootstrapGridElement('row',[], mainContainer);
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
   let row = bootstrapGridElement("row",["my-5"],mainContainer);
   let column = bootstrapGridElement("col", ["d-flex", "justify-content-center"], row.getHtmlNode());
   const setupButton = (()=>{
       let buttonContainer = document.createElement('div');
       column.setChildNode(buttonContainer);
       let button = document.createElement('button');
       button.addEventListener('click', resetCells);
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
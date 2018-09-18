const {holdButtonFactory} = require('./components/holdButton/holdButton');
const mainContainer = document.getElementById('mainContainer');
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
                button.setParent(buttonRowContainer);
            }
        })();
    }
})();
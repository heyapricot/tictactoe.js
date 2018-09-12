const gameboard = ((width = 3, height = 3)=>{
    const _generateCells = (width, height) => {
        let matrix = [];
        for(let i = 0; i < height; i++){matrix.push([])}
        matrix.map((row)=>{for(let i = 0; i < width; i++){row.push([])}});
        return matrix;
    };

    let _cells = _generateCells(width, height);

    const cells = (cellArray = _cells) => {
        return cellArray;
    };
    const cellAt = (coordinates, cellArray = _cells) => {
        coordinates.reduce((acc,val)=>{ cellArray[val] })
    };
    const write = (coordinates, cellArray = _cells) => {

    };
    return {cells, cellAt, write}
})();
module.exports = {
    gameboard: gameboard
};
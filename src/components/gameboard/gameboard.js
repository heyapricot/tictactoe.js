const gameboard = ((width = 3, height = 3)=>{
    const _generateCells = (width, height) => {
        let matrix = [];
        for(let i = 0; i < height; i++){matrix.push([])}
        matrix.map((row)=>{for(let i = 0; i < width; i++){row.push(NaN)}});
        return matrix;
    };
    const _getRow = (rowIdx, array = _cells)=>{
        return array[rowIdx];
    };
    const cells = (cellArray = _cells) => {
        return cellArray;
    };
    const cellAt = (coordinates, cellArray = _cells) => {
        let cell = cellArray;
        for(let i = 0; i < coordinates.length; i++){
            cell = ((position, array) => { return array[position] })(coordinates[i], cell);
        }
        return cell;
    };
    const isFull = () => {
        let NaNcells = _cells.filter(cell => cell === NaN);
        return NaNcells.length === 0;
    };
    const write = (coordinates, identifier, cellArray = _cells) => {
        let row = cellArray;
        coordinates.slice(1).reverse().forEach((coord)=>{
            row = row[coord]
        });
        row[coordinates[0]] = identifier;
    };

    let _cells = _generateCells(width, height);

    return {cells, cellAt, isFull, write}
})();
module.exports = {
    gameboard: gameboard
};
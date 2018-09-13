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
    const hasSequence = (length = 3, cellArray = _cells) =>{
        let result = false;
        const horizontalSequence = (length)=>{
            const regexString = '(.)\\1{' + (length - 1) +'}';
            let regex = new RegExp(regexString);
            let result = false;
            cellArray.forEach((row)=>{ result = result || regex.test(row.join('')) });
            return result;
        };
        result = result || horizontalSequence(length);
        return result;
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
        if(isNaN(row[coordinates[0]])){
            row[coordinates[0]] = identifier;
            return 0;
        }
        else
            return 1
    };

    let _cells = _generateCells(width, height);

    return {cells, cellAt, hasSequence, isFull, write}
})();
module.exports = {
    gameboard: gameboard
};
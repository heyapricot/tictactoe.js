const {holdButtonFactory} = require('./holdButton');
let main = document.getElementById('main');
const cell = holdButtonFactory('btn-warning');
cell.setParent(main);

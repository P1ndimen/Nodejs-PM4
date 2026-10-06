const path = require('path');

const infoPath = path.join(__dirname, 'data', 'info.txt');
console.log('Путь к info.txt:', infoPath);

console.log('Разбор пути (path.parse):');
console.log(path.parse(infoPath));

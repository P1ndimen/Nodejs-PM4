const path = require('path');

// Имя файла из аргумента командной строки
const fileName = process.argv[2];

if (!fileName) {
  console.log('Укажите имя файла. Пример: node index.js report.txt');
  process.exit(1);
}

const fullPath = path.join(__dirname, 'files', fileName);
console.log(fullPath);

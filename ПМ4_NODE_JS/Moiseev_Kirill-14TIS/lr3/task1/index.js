const path = require('path');

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

console.log('Имя файла:', path.basename(__filename));
console.log('Расширение файла:', path.extname(__filename));
console.log('Папка файла:', path.dirname(__filename));

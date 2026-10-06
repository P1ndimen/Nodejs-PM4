const path = require('path');

// __dirname = .../project/src, поэтому поднимаемся на уровень выше через '..'
const configPath = path.join(__dirname, '..', 'config', 'app.json');

console.log('Путь к app.json:', configPath);
console.log('Имя файла:', path.basename(configPath));
console.log('Расширение:', path.extname(configPath));

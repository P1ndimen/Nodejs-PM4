// Задание 2: Чтение данных из inventory.txt
const fs = require('fs');
const path = require('path');

const inventoryFile = path.join(__dirname, 'data', 'inventory.txt');

try {
  if (!fs.existsSync(inventoryFile)) {
    console.log('Инвентарь не инициализирован');
  } else {
    const content = fs.readFileSync(inventoryFile, 'utf8');
    if (content.trim() === '') {
      console.log('Инвентарь не инициализирован');
    } else {
      console.log('Содержимое inventory.txt:');
      console.log(content);
    }
  }
} catch (err) {
  console.error('Ошибка чтения файла:', err.message);
}

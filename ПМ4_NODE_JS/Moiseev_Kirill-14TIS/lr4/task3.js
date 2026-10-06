// Задание 3: Добавление записи в конец файла (флаг 'a')
const fs = require('fs');
const path = require('path');

const inventoryFile = path.join(__dirname, 'data', 'inventory.txt');

function addItem(name, quantity) {
  try {
    // flag 'a' — дописывание в конец файла, строка начинается с новой строки
    fs.writeFileSync(inventoryFile, `\n${name}: ${quantity}`, { flag: 'a' });
    console.log(`Добавлено: ${name}: ${quantity}`);
  } catch (err) {
    console.error('Ошибка добавления записи:', err.message);
  }
}

addItem('Монитор', 10);
addItem('Клавиатура', 25);

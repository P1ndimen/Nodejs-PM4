// Задание 1: Инициализация (папка data + файл inventory.txt)
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const inventoryFile = path.join(__dirname, 'data', 'inventory.txt');

try {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('Папка data создана');
  } else {
    console.log('Папка data уже существует');
  }

  fs.writeFileSync(inventoryFile, 'Название товара: Количество');
  console.log('Файл inventory.txt создан и заполнен');
} catch (err) {
  console.error('Ошибка инициализации:', err.message);
}

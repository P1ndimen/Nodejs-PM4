// Задание 4: Создание файлов и список файлов в папке data
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const categoriesFile = path.join(__dirname, 'data', 'categories.txt');
const suppliersFile = path.join(__dirname, 'data', 'suppliers.txt');

try {
  fs.writeFileSync(categoriesFile, '');
  fs.writeFileSync(suppliersFile, '');
  console.log('Пустые файлы categories.txt и suppliers.txt созданы');

  const files = fs.readdirSync(dataDir);
  console.log(`Количество файлов в папке data: ${files.length}`);
  console.log('Названия файлов:');
  files.forEach((file) => console.log(' -', file));
} catch (err) {
  console.error('Ошибка работы с папкой:', err.message);
}

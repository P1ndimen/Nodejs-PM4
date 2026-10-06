// Задание 5: Очистка системы (удаление temp_log.txt, переименование inventory.txt)
const fs = require('fs');
const path = require('path');

const tempLog = path.join(__dirname, 'data', 'temp_log.txt');
const oldName = path.join(__dirname, 'data', 'inventory.txt');
const newName = path.join(__dirname, 'data', 'inventory_final.txt');

try {
  if (fs.existsSync(tempLog)) {
    fs.unlinkSync(tempLog);
    console.log('Файл temp_log.txt удалён');
  } else {
    console.log('Файл temp_log.txt не найден, удалять нечего');
  }
} catch (err) {
  console.error('Ошибка удаления файла:', err.message);
}

try {
  fs.renameSync(oldName, newName);
  console.log('inventory.txt переименован в inventory_final.txt');
} catch (err) {
  console.error('Ошибка переименования:', err.message);
}

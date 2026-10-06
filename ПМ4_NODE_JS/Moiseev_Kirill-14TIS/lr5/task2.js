// Задание 2: Асинхронное чтение tasks.txt (вывод в верхнем регистре)
const fs = require('fs/promises');
const path = require('path');

async function readTasks() {
  const tasksFile = path.join(__dirname, 'tasks.txt');

  try {
    const content = await fs.readFile(tasksFile, 'utf8');
    console.log(content.toUpperCase());
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Файл задач не найден');
    } else {
      console.error('Ошибка чтения файла:', err.message);
    }
  }
}

readTasks();

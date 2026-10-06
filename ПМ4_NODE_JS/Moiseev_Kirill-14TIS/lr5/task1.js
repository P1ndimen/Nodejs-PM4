// Задание 1: Создание структуры (папка storage + status.txt)
const fs = require('fs/promises');
const path = require('path');

async function setup() {
  const storageDir = path.join(__dirname, 'storage');
  const statusFile = path.join(__dirname, 'storage', 'status.txt');

  try {
    try {
      await fs.access(storageDir);
      console.log('Папка storage уже существует');
    } catch {
      await fs.mkdir(storageDir);
      console.log('Папка storage создана');
    }

    await fs.writeFile(statusFile, 'Система готова');
    console.log('Файл status.txt записан');
  } catch (err) {
    console.error('Ошибка при создании структуры:', err.message);
  }
}

setup();

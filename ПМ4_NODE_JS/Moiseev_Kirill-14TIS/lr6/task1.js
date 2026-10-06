// Задание 1: Инициализация: если books.json нет, создать его с пустым массивом []
const fs = require('fs/promises');
const path = require('path');

const booksFile = path.join(__dirname, 'books.json');

async function initBooks() {
  try {
    try {
      await fs.access(booksFile);
      console.log('Файл books.json уже существует');
    } catch {
      await fs.writeFile(booksFile, JSON.stringify([], null, 2));
      console.log('Файл books.json создан с пустым массивом []');
    }
  } catch (err) {
    console.error('Ошибка инициализации:', err.message);
  }
}

initBooks();

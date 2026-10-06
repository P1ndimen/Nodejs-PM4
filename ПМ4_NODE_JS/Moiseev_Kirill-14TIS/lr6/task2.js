// Задание 2: Добавление книги: addBook(title, author, year)
const fs = require('fs/promises');
const path = require('path');

const booksFile = path.join(__dirname, 'books.json');

async function addBook(title, author, year) {
  try {
    let books = [];
    try {
      books = JSON.parse(await fs.readFile(booksFile, 'utf8'));
    } catch (err) {
      if (err.code !== 'ENOENT') throw err; // нет файла: начинаем с пустого массива
    }

    // Генерация нового id: максимальный существующий + 1
    const newId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

    const book = { id: newId, title, author, year, isIssued: false };
    books.push(book);

    await fs.writeFile(booksFile, JSON.stringify(books, null, 2));
    console.log('Книга добавлена:', book);
  } catch (err) {
    console.error('Ошибка добавления книги:', err.message);
  }
}

async function main() {
  await addBook('Мёртвые души', 'Николай Гоголь', 1842);
  await addBook('Ревизор', 'Николай Гоголь', 1836);
  await addBook('Мастер и Маргарита', 'Михаил Булгаков', 1967);
  await addBook('Собачье сердце', 'Михаил Булгаков', 1925);
  await addBook('Python для всех', 'Чарльз Северанс', 2015);
}

main();

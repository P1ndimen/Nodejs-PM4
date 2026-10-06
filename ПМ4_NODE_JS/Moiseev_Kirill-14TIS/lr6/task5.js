// Задание 5: Удаление: deleteOldBooks(currentYear) удаляет книги, изданные более 50 лет назад
const fs = require('fs/promises');
const path = require('path');

const booksFile = path.join(__dirname, 'books.json');

async function deleteOldBooks(currentYear) {
  try {
    const books = JSON.parse(await fs.readFile(booksFile, 'utf8'));

    // Оставляем только книги, изданные не более 50 лет назад
    const actual = books.filter((b) => currentYear - b.year <= 50);
    const removed = books.filter((b) => currentYear - b.year > 50);

    await fs.writeFile(booksFile, JSON.stringify(actual, null, 2));

    console.log(`Удалено книг: ${removed.length}`);
    removed.forEach((b) => console.log(`  - ${b.title} (${b.year})`));
    console.log(`Осталось книг: ${actual.length}`);
  } catch (err) {
    console.error('Ошибка удаления книг:', err.message);
  }
}

deleteOldBooks(new Date().getFullYear());

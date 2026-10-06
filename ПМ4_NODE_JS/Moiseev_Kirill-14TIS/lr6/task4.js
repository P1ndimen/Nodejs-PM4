// Задание 4: Обновление: issueBook(id) меняет isIssued на true
const fs = require('fs/promises');
const path = require('path');

const booksFile = path.join(__dirname, 'books.json');

async function issueBook(id) {
  try {
    const books = JSON.parse(await fs.readFile(booksFile, 'utf8'));
    const book = books.find((b) => b.id === id);

    if (!book) {
      console.log(`Книга с id ${id} не найдена`);
      return;
    }

    if (book.isIssued) {
      console.log(`Книга "${book.title}" уже выдана`);
      return;
    }

    book.isIssued = true;
    await fs.writeFile(booksFile, JSON.stringify(books, null, 2));
    console.log(`Книга "${book.title}" (id ${id}) выдана`);
  } catch (err) {
    console.error('Ошибка выдачи книги:', err.message);
  }
}

async function main() {
  await issueBook(1);
  await issueBook(1); // повторная выдача
  await issueBook(99); // несуществующий id
}

main();

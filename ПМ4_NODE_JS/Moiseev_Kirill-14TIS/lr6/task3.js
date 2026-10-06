// Задание 3: Поиск книг по автору: findBooksByAuthor(author)
const fs = require('fs/promises');
const path = require('path');

const booksFile = path.join(__dirname, 'books.json');

async function findBooksByAuthor(author) {
  try {
    const books = JSON.parse(await fs.readFile(booksFile, 'utf8'));
    const found = books.filter(
      (b) => b.author.toLowerCase() === author.toLowerCase()
    );

    if (found.length === 0) {
      console.log(`Книги автора "${author}" не найдены`);
      return;
    }

    console.log(`Книги автора "${author}":`);
    found.forEach((b) => {
      console.log(
        `  [${b.id}] ${b.title}, ${b.year} г., ${b.isIssued ? 'выдана' : 'в наличии'}`
      );
    });
  } catch (err) {
    console.error('Ошибка поиска:', err.message);
  }
}

async function main() {
  await findBooksByAuthor('Николай Гоголь');
  await findBooksByAuthor('Лев Толстой');
}

main();

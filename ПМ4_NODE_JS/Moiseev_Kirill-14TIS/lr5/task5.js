// Задание 5: Параллельная проверка существования файлов (Promise.all + fs.access)
const fs = require('fs/promises');
const path = require('path');

const fileNames = ['tasks.txt', 'copy.txt', 'source.txt', path.join('storage', 'status.txt'), 'missing.txt'];

async function checkFiles() {
  try {
    const results = await Promise.all(
      fileNames.map(async (name) => {
        const fullPath = path.join(__dirname, name);
        try {
          await fs.access(fullPath);
          return { name, exists: true };
        } catch {
          return { name, exists: false };
        }
      })
    );

    results.forEach(({ name, exists }) => {
      console.log(`${name}: ${exists ? 'существует' : 'НЕ найден'}`);
    });
  } catch (err) {
    console.error('Ошибка проверки файлов:', err.message);
  }
}

checkFiles();

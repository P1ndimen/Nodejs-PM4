// Задание 4: Цепочка операций: читаем source.txt -> копия copy.txt -> удаляем оригинал
const fs = require('fs/promises');
const path = require('path');

async function copyAndRemove() {
  const sourceFile = path.join(__dirname, 'source.txt');
  const copyFile = path.join(__dirname, 'copy.txt');

  try {
    const content = await fs.readFile(sourceFile, 'utf8');
    console.log('source.txt прочитан');

    await fs.writeFile(copyFile, content);
    console.log('Копия copy.txt создана');

    await fs.unlink(sourceFile);
    console.log('Оригинал source.txt удалён');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Файл source.txt не найден');
    } else {
      console.error('Ошибка в цепочке операций:', err.message);
    }
  }
}

copyAndRemove();

const path = require('path');

const files = ['photo.jpg', 'document.pdf', 'music.mp3', 'script.js'];

files.forEach((file) => {
  const ext = path.extname(file);
  const fullPath = path.join(__dirname, 'uploads', file);
  console.log(`Файл: ${file}`);
  console.log(`  Расширение: ${ext}`);
  console.log(`  Полный путь: ${fullPath}`);
});

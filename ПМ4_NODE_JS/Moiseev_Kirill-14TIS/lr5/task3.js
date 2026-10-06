// Задание 3: Логирование с меткой времени
const fs = require('fs/promises');
const path = require('path');

async function addLog(message) {
  const logFile = path.join(__dirname, 'storage', 'activity.log');
  const line = `[${new Date().toLocaleString('ru-RU')}] ${message}\n`;

  try {
    await fs.appendFile(logFile, line);
    console.log('Запись добавлена в лог:', line.trim());
  } catch (err) {
    console.error('Ошибка записи в лог:', err.message);
  }
}

async function main() {
  await addLog('Система запущена');
  await addLog('Пользователь вошёл в систему');
  await addLog('Архивация логов завершена');
}

main();

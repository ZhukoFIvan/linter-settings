import readlineSync from 'readline-sync';
import runLCMGame from './src/games/lcm.js'
import runProgressionGame from './src/games/progression.js'

const games = {
  1: { name: 'LCM Game', run: runLCMGame },
  2: { name: 'Progression Game', run: runProgressionGame },
};

console.log('Добро пожаловать в игру!');
console.log('Выберите игру:');
Object.entries(games).forEach(([key, game]) => {
  console.log(`${key}. ${game.name}`);
});

const choice = readlineSync.question('Введите номер игры: ')
const selectedGame = games[choice]

if (selectedGame) {
	selectedGame.run()
} else console.log('Неверный выбор игры')

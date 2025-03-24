import { runGame } from '../engine.js'
import { getRandomNumber, getLCM } from '../utils.js'

const GAME_DESCRIPTION = 'Найдите наименьшее общее кратное двух чисел.'
const MIN_NUMBER = 1
const MAX_NUMBER = 20

const generateRound = () => {
	const num1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
	const num2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
	const question = `${num1} ${num2}`
	const correctAnswer = String(getLCM(num1, num2))

	return { question, correctAnswer }
}

export default () => runGame(GAME_DESCRIPTION, generateRound)

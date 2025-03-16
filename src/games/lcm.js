import { getRandomNumber, getLCMForMultiple } from '../utils.js'
import runGame from '../index.js'

const description = 'Найдите наименьшее общее кратное двух чисел.'
const minNumber = 1
const maxNumber = 100
const numbersCount = 3

const generateRound = () => {
	const numbers = []

	for (let i = 0; i < numbersCount; i += 1) {
		numbers.push(getRandomNumber(minNumber, maxNumber))
	}

	const question = numbers.join(' ')
	const correctAnswer = String(getLCMForMultiple(numbers))

	return { question, correctAnswer }
}

export default () => {
	runGame(description, generateRound)
}

import { getRandomNumber } from '../utils.js'
import runGame from '../index.js'

const description = 'Какое число пропущено в прогрессии?'
const minStart = 1
const maxStart = 10
const minRatio = 2
const maxRatio = 5
const minLength = 5
const maxLength = 10

const generateProgression = (start, ratio, length) => {
	const progression = []
	let current = start

	for (let i = 0; i < length; i += 1) {
		progression.push(current)
		current *= ratio
	}

	return progression
}

const generateRound = () => {
	const start = getRandomNumber(minStart, maxStart)
	const ratio = getRandomNumber(minRatio, maxRatio)
	const length = getRandomNumber(minLength, maxLength)

	const progression = generateProgression(start, ratio, length)
	const hiddenIndex = getRandomNumber(0, length - 1)

	const correctAnswer = String(progression[hiddenIndex])

	const questionProgression = [...progression]
	questionProgression[hiddenIndex] = '..'

	const question = questionProgression.join(' ')

	return { question, correctAnswer }
}

export default () => {
	runGame(description, generateRound)
}

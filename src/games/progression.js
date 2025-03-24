import { runGame } from '../engine.js'
import { getRandomNumber } from '../utils.js'

const GAME_DESCRIPTION = 'Какое число пропущено в прогрессии?'
const PROGRESSION_LENGTH = 10
const MIN_START = 1
const MAX_START = 50
const MIN_STEP = 2
const MAX_STEP = 5

const generateProgression = (start, step, length) => {
	const progression = []
	for (let i = 0; i < length; i += 1) {
		progression.push(start + step * i)
	}
	return progression
}

const generateRound = () => {
	const start = getRandomNumber(MIN_START, MAX_START)
	const step = getRandomNumber(MIN_STEP, MAX_STEP)
	const progression = generateProgression(start, step, PROGRESSION_LENGTH)

	const hiddenIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1)
	const correctAnswer = String(progression[hiddenIndex])
	progression[hiddenIndex] = '..'

	const question = progression.join(' ')
	return { question, correctAnswer }
}

export default () => runGame(GAME_DESCRIPTION, generateRound)

import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

const runGame = (gameDescription, generateRound) => {
	console.log('Добро пожаловать в игру!')
	const name = readlineSync.question('Как вас зовут? ')
	console.log(`Привет, ${name}!`)
	console.log(gameDescription)

	for (let i = 0; i < ROUNDS_COUNT; i += 1) {
		const { question, correctAnswer } = generateRound()
		console.log(`Вопрос: ${question}`)
		const userAnswer = readlineSync.question('Ваш ответ: ')

		if (userAnswer !== correctAnswer) {
			console.log(
				`'${userAnswer}' неправильный ответ ;(. Правильный ответ был '${correctAnswer}'.`
			)
			console.log(`Попробуйте еще раз, ${name}!`)
			return
		}
		console.log('Правильно!')
	}

	console.log(`Поздравляем, ${name}!`)
}

export { runGame, ROUNDS_COUNT }

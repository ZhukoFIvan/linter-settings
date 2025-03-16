import readlineSync from 'readline-sync'

const roundsCount = 3

const runGame = (gameDescription, generateRound) => {
	console.log('Добро пожаловать в игру!')

	const userName = readlineSync.question('Напиши имя')
	console.log(`Привет, ${userName}!`)

	console.log(gameDescription)

	for (let i = 0; i < roundsCount; i += 1) {
		const { question, correctAnswer } = generateRound()
		console.log(`Вопрос: ${question}`)

		const userAnswer = readlineSync.question('Ответ: ')

		if (userAnswer === correctAnswer) {
			console.log('	!')
		} else {
			console.log(
				`'${userAnswer}' - неправильный ответ ;(. Правильный ответ: '${correctAnswer}'.`
			)
			console.log(`${userName}, попробуй еще раз!`)
			return
		}
	}

	console.log(`${userName}, поздравляем!`)
}

export default runGame

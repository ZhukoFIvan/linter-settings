const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getGCD = (a, b) => {
  if (b === 0) {
    return a
	}
	return getGCD(b, a % b)
}

const getLCM = (a, b) => (a * b) / getGCD(a, b)

const getLCMForMultiple = (numbers) => {
	let result = numbers[0]
	for (let i = 1; i < numbers.length; i += 1) {
		result = getLCM(result, numbers[i])
	}
	return result
}

export { getRandomNumber, getGCD, getLCM, getLCMForMultiple }

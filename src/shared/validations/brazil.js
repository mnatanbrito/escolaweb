const calcFirstChecker = (firstNineDigits) => {
  var sum = null

  for (var j = 0; j < 9; ++j) {
    sum += Number(firstNineDigits.toString().charAt(j)) * (10 - j)
  }

  var lastSumChecker1 = sum % 11
  var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1
  return checker1
}

const calcSecondChecker = (cpfWithChecker1) => {
  var sum = null

  for (var k = 0; k < 10; ++k) {
    sum += Number(cpfWithChecker1.toString().charAt(k)) * (11 - k)
  }

  var lastSumChecker2 = sum % 11
  var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2
  return checker2
}

/**	Valida o CPF informado como parâmetro
*	@param {String} cpf	CPF para validação.
*
*	@example
*		load(req, cpf, callback) {
   *			if(isValidCpf(cpf)) {
                   do something
   }
   *		}
   */
export function isValidCpf(value) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    console.warn('Unsupported value')
    return false
  }

  var cleanCPF = String(value).replace(/\.|-|\s/g, '')
  var firstNineDigits = cleanCPF.substring(0, 9)
  var checker = cleanCPF.substring(9, 11)

  if (cleanCPF.length !== 11) {
    return false
  } // Checking if all digits are equal

  for (var i = 0; i < 10; i++) {
    if ('' + firstNineDigits + checker === Array(12).join(String(i))) {
      return false
    }
  }

  var checker1 = calcFirstChecker(firstNineDigits)
  var checker2 = calcSecondChecker('' + firstNineDigits + checker1)
  return checker.toString() === checker1.toString() + checker2.toString()
}

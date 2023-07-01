const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

function validateCPF (cpf) {
  return cpfRegex.test(cpf)
}

function validateEmail (email) {
  return emailRegex.test(email)
}

function validateUser ({ cpf, email }) {
  const documentNumberIsValid = validateCPF(cpf)
  const emailIsValid = validateEmail(email)
  return documentNumberIsValid && emailIsValid
}

module.exports = validateUser

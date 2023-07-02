class DatabaseError extends Error {
  constructor(message, code, error) {
    super(message)
    this.name = 'DatabaseError'
    this.code = code
    this.error = error
  }
}

module.exports = DatabaseError

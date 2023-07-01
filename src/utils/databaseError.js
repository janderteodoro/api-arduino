class DatabaseError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'DatabaseError'
    this.code = code
  }
}

module.exports = DatabaseError

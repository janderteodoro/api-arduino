const DatabaseError = require('../../../utils/databaseError')

const makeUserDb = ({ connection }) => {
  async function insert ({ ...userInfo }) {
    try {
      const values = [
        userInfo.userName,
        userInfo.userSurname,
        userInfo.userEmail,
        userInfo.userDocumentNumber
      ];
      const query = 'INSERT INTO USERS (userName, userSurname, userEmail, userDocumentNumber) VALUES (?, ?, ?, ?)';
      
      const result = await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) {
            console.error('Erro na inserção:', err);
            reject(err);
          } else {
            console.log('Novo usuário inserido com sucesso');
            resolve(result);
          }
        });
      });
  
      return result;
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: Database Error', 'DB_ERROR', error)
    }
  }

  async function findOne({ email }) {
    try {
      const [ rows ] = await connection.execute('SELECT * FROM users WHERE userEmail = ?', [ email ])
      connection.end()
      if (rows.length > 0) {
        return rows[0];
      } else {
        return null;
      }
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: Database Error', 'DB_ERROR', error)
    }
  }

  async function find() {
    try {
      const [ rows ] = await connection.query('SELECT * FROM users')
      connection.end()
      return rows
  
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: DataBaseError', 'DB_ERROR', error)
    }
  }

  return Object.freeze({
    insert,
    findOne,
    find
  })
}

module.exports = makeUserDb

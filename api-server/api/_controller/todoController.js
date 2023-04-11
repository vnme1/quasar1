const db = require('../../plugins/mysql.js');
const todoController = {

  async getTest(){
    const query =  `SELECT * FROM vue.todo`;
    const [[rows]] = await db.execute(query);
    console.log(rows);
    return rows;
}
}
module.exports = todoController;

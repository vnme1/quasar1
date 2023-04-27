const db = require('../../plugins/mysql');
const TABLE = require("../../util/TABLE");
const STATUS = require("../../util/STATUS");
const { resData, currentTime, isEmpty } = require("../../util/lib");

const studentController = {

    async getsTest(){
        const query =  `SELECT * FROM vue.student`;
        const [[rows]] = await db.execute(query);
        return rows;
    },

    create: async (req) => {
      const { s_name, gender } = req.body;
      if (isEmpty(s_name) || isEmpty(gender)) {
        return resData(STATUS.E100.result, STATUS.E100.resultDesc);
      }

      try{
        const query = `INSERT INTO student (s_name, gender) VALUES (?,?)`;
        const values = [s_name, gender];
        const [rows] = await db.execute(query, values);

        if (rows.affectedRows == 1) {
          return resData(
            STATUS.S200.result,
            STATUS.S200.resultDesc

          );
        }
      } catch (e) {
        console.log(e.message);
        return resData(STATUS.E300.result, STATUS.E300.resultDesc);
      }
    },
}
module.exports = studentController;

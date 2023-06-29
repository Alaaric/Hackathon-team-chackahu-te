const AbstractManager = require("./AbstractManager");

class brandsManager extends AbstractManager {
  constructor() {
    super({ table: "brands" });
  }

  getAllbrands() {
    return this.database.query(`select * from ${this.table} `);
  }
}

module.exports = brandsManager;

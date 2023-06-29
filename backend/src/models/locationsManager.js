const AbstractManager = require("./AbstractManager");

class locationsManager extends AbstractManager {
  constructor() {
    super({ table: "locations" });
  }

  getAlllocations() {
    return this.database.query(`select * from ${this.table} `);
  }
}

module.exports = locationsManager;

const AbstractManager = require("./AbstractManager");

class modelsManager extends AbstractManager {
  constructor() {
    super({ table: "models" });
  }

  getAllmodels() {
    return this.database.query(
      `select name, screen_size, network from ${this.table} `
    );
  }

  insert(model) {
    return this.database.query(
      `insert into ${this.table} (name, screen_size, network) values (?,?,?)`,
      [model.name, model.screen_size, model.network]
    );
  }
}

module.exports = modelsManager;

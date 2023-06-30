const AbstractManager = require("./AbstractManager");

class productsManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (brand_id, model_id, os_id, RAM_id, storage_id, image) values (?, ?, ?, ?, ?, ?)`,
      [
        product.brand_id,
        product.model_id,
        product.os_id,
        product.RAM_id,
        product.storage_id,
        product.image,
      ]
    );
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set brand_id = ?, model_id = ?, os_id = ?, RAM_id = ?, storage_id = ?, image = ? where id = ?`,
      [
        product.brand_id,
        product.model_id,
        product.os_id,
        product.RAM_id,
        product.storage_id,
        product.image,
      ]
    );
  }
}

module.exports = productsManager;

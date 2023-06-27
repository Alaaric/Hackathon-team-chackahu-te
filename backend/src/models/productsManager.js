const AbstractManager = require("./AbstractManager");

class productsManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (title, type, color, description) values (?, ?, ?, ?)`,
      [product.title, product.type, product.color, product.description]
    );
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set title = ?, type = ?, color = ?, description = ? where id = ?`,
      [
        product.title,
        product.type,
        product.color,
        product.description,
        product.id,
      ]
    );
  }
}

module.exports = productsManager;

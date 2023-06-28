const AbstractManager = require("./AbstractManager");

class productsManager extends AbstractManager {
  constructor() {
    super({ table: "stock_products" });
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (user_id, creation_date, color, brand_id, model_id, os_id, RAM_id, storage_id,
        state_id, category_id, accessories, price, location_id, description) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        product.user_id,
        product.creation_date,
        product.color,
        product.brand_id,
        product.model_id,
        product.os_id,
        product.RAM_id,
        product.storage_id,
        product.state_id,
        product.category_id,
        product.accessories,
        product.price,
        product.location_id,
        product.description,
      ]
    );
  }

  update(product) {
    return this.database.query(
      `update ${this.table} set user_id = ?, creation_date = ?, color = ?, brand_id = ?, model_id = ?, os_id = ?,
      RAM_id = ?, storage_id = ?, state_id = ?, category_id = ?, accessories = ?, price = ?, location_id = ?,
      description = ? where id = ?`,
      [
        product.user_id,
        product.creation_date,
        product.color,
        product.brand_id,
        product.model_id,
        product.os_id,
        product.RAM_id,
        product.storage_id,
        product.state_id,
        product.category_id,
        product.accessories,
        product.price,
        product.location_id,
        product.description,
      ]
    );
  }
}

module.exports = productsManager;

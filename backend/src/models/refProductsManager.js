const AbstractManager = require("./AbstractManager");

class productsManager extends AbstractManager {
  constructor() {
    super({ table: "ref_products" });
  }

  getAllRefPhones() {
    return this.database.query(
      `select brand, m.name model, screen_size, network, os.name os,
      RAMs.value ram, s.value storage from ${this.table}
      inner join brands on brand_id = brands.id
      inner join models as m on model_id = m.id
      inner join os on os_id = os.id
      inner join RAMs on RAM_id = RAMs.id
      inner join storages s on storage_id = s.id`
    );
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

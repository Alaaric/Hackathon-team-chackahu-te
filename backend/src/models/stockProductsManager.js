const AbstractManager = require("./AbstractManager");

class productsManager extends AbstractManager {
  constructor() {
    super({ table: "stock_products" });
  }

  getstock() {
    return this.database.query(
      `select u.firstname, u.lastname, creation_date, color, brand, m.name model, screen_size, network, os.name OS,
      RAMs.value RAM, storages.value storage, state, category, accessories, price, location, description from ${this.table}  
      inner join users as u on user_id = u.id
      inner join brands on brand_id = brands.id
      inner join models as m on model_id = m.id
      inner join os on os_id = os.id
      inner join RAMs  on RAM_id = RAMs.id
      inner join storages on storage_id = storages.id
      inner join states on state_id = states.id
      inner join categories on category_id = categories.id
      inner join locations on location_id = locations.id`
    );
  }

  getstockbyid(product) {
    return this.database.query(
      `select u.firstname, u.lastname, creation_date, color, brand, m.name as model, screen_size, network, os.name as OS,
      RAMs.value as RAM, storages.value as storage, state, category, accessories, price, location, description from ${this.table} 
      inner join users as u on user_id = u.id
      inner join brands on brand_id = brands.id
      inner join models as m on model_id = m.id
      inner join os on os_id = os.id
      inner join RAMs on RAM_id = RAMs.id
      inner join storages on storage_id = storages.id
      inner join states on state_id = states.id
      inner join categories on category_id = categories.id
      inner join locations on location_id = locations.id 
      where id = ?`,
      [product.id]
    );
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

const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  selectAll() {
    return this.database.query(
      `select ${this.table}.id, firstname, lastname, role, email from ${this.table}
      inner join roles on role_id = roles.id`
    );
  }

  selectByEmail(email) {
    return this.database.query(
      "select id, firstname, lastname, hpassword, role_id from users where email = ?",
      [email]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hpassword, role_id) values (?,?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.hpassword, user.role_id]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, role_id = ? where id = ?`,
      [user.firstname, user.lastname, user.email, user.role_id, user.id]
    );
  }

  updateUserPassword(user) {
    return this.database.query(
      `update ${this.table} set hpassword = ? where id = ?`,
      [user.hpassword, user.id]
    );
  }
}

module.exports = usersManager;

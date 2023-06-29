const AbstractManager = require("./AbstractManager");

class commentsManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  insertComment(comment) {
    return this.database.query(
      `insert into ${this.table} (title, content, user_id) values (?, ?, ?)`,
      [comment.title, comment.content, comment.user_id]
    );
  }

  getAllComments() {
    return this.database.query(
      `select c.id, c.title, c.content, CONCAT(u.firstname," ", u.lastname) fullname from ${this.table} c JOIN users u ON u.id = c.user_id  `
    );
  }
}

module.exports = commentsManager;

class DBAccess {
  constructor(db, table) {
    this.db = db;
    this.table = table;
  }

  find() {
    return this.db(this.table);
  }

  findBy(query) {
    return this.db(this.table).where(query).first();
  }

  create(data) {
    return this.db(this.table).insert(data);
  }

  delete(id) {
    return this.db(this.table)
      .del()
      .where({ id })
      .then((result) => {
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  }

  deleteBy(query) {
    return this.db(this.table)
      .del()
      .where(query)
      .then((result) => {
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  }
}

module.exports = DBAccess;

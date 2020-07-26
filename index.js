class DBAccess {
  constructor(db, table) {
    this.db = db;
    this.table = table;
  }

  find() {
    return this.db(this.table);
  }

  findBy(query) {
    return this.db(this.table).where(query);
  }
}

module.exports = DBAccess;

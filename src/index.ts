import Knex from 'knex';

class DBAccess {
  db: Knex<any, unknown[]>;
  table: string;

  constructor(db: Knex, table: string) {
    this.db = db;
    this.table = table;
  }

  find() {
    return this.db(this.table);
  }

  findBy(query: { query: object }) {
    return this.db(this.table).where(query).first();
  }

  create(data: { data: object }) {
    return this.db(this.table).insert(data);
  }

  delete(id: { id: string | number }) {
    return this.db(this.table)
      .del()
      .where({ id })
      .then((result) => {
        return true;
      })
      .catch((err) => {
        throw new Error(err);
        return false;
      });
  }

  deleteBy(query: { query: object }) {
    return this.db(this.table)
      .del()
      .where(query)
      .then((result) => {
        return true;
      })
      .catch((err) => {
        throw new Error(err);
        return false;
      });
  }
}

module.exports = DBAccess;

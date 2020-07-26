# knex-db-access

An easy way to access your SQL database without queries

## Usage

---

```js
const dbConnection = require("./directoryName");
const DBAccess = require("knex-db-access");
const db = new DBAccess(dbConnection, "tableName");
```

### Your `dbConnection` file could look like this:

> Your db connection file has to be a connection to your knex init file.

```js
const knex = require("knex");

require("dotenv").config();

const knexConfig = require("../knexfile");

const env = process.env.NODE_ENV;

module.exports = knex(knexConfig[env]);
```

## Methods Available At Default

> Tip: All methods return a promise!

## `find`

> Returns all records in table

## `findBy`

> returns the first record where query is present

- takes an object with the key and value you want to match
  Example:

```js
db.findBy({ username: req.body.username });
```

## `create`

> returns the data created on success

```js
db.create(dataObject).then((result) => {
  // result === dataObject
});
```

## `delete`

> Required: id passed to delete method

> returns `true` on success, `false` on failure an error message printed to the console

```js
const deleted = await db.delete(idNumber);
if (deleted) {
  // success!
}
```

## `deleteBy`

> Required: object passed to delete method

> returns `true` on success, `false` on failure an error message

```js
const deleted = await db.deleteBy({ username: req.body.username });
if (deleted) {
  // success!
}
```

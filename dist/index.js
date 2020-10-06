"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBAccess = /** @class */ (function () {
    function DBAccess(db, table) {
        this.db = db;
        this.table = table;
    }
    DBAccess.prototype.find = function () {
        return this.db(this.table);
    };
    DBAccess.prototype.findBy = function (query) {
        return this.db(this.table).where(query).first();
    };
    DBAccess.prototype.create = function (data) {
        return this.db(this.table).insert(data);
    };
    DBAccess.prototype.delete = function (id) {
        return this.db(this.table)
            .del()
            .where({ id: id })
            .then(function (result) {
            return true;
        })
            .catch(function (err) {
            console.error(err);
            return false;
        });
    };
    DBAccess.prototype.deleteBy = function (query) {
        return this.db(this.table)
            .del()
            .where(query)
            .then(function (result) {
            return true;
        })
            .catch(function (err) {
            console.error(err);
            return false;
        });
    };
    return DBAccess;
}());
module.exports = DBAccess;

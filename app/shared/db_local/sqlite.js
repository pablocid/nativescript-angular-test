"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sqlite = require('nativescript-sqlite');
var LocalDB = (function () {
    function LocalDB(tablename) {
        this.tablename = tablename;
        this._setTable();
    }
    LocalDB.prototype._setTable = function () {
        var _this = this;
        this.db = (new Sqlite("database.db"))
            .then(function (db) {
            return db.execSQL("\n                    CREATE TABLE IF NOT EXISTS " + _this.tablename + " \n                        (\n                            _id varchar(255) PRIMARY KEY ,\n                            schm TEXT,\n                            created TEXT,\n                            updated TEXT ,\n                            attributes JSON,\n                            date NUMERIC\n                        )\n                ")
                .then(function (id) { return db; })
                .catch(function (err) { throw err; });
        })
            .catch(function (err) { throw err; });
    };
    LocalDB.prototype.findOne = function (id) {
        var _this = this;
        return this.db
            .then(function (db) { return db.get("SELECT * FROM " + _this.tablename + " WHERE _id = '" + id + "'"); })
            .then(function (row) {
            if (row)
                return _this._parseRow(row);
            return row;
        });
    };
    LocalDB.prototype.insert = function (value, updated) {
        var _this = this;
        var doc = this._stringifyRow(value);
        return this.db.then(function (db) {
            if (!value)
                return null;
            return db.execSQL("\n                INSERT INTO " + _this.tablename + " VALUES ('" + doc[0] + "','" + doc[1] + "','" + doc[2] + "','" + doc[3] + "','" + doc[4] + "'," + (updated | doc[5]) + ");\n                ", function (err, id) {
                if (err)
                    console.log('ERROR EN INSERTAR', err);
                console.log('el id es' + id);
            });
        });
    };
    LocalDB.prototype.remove = function (id) {
        var _this = this;
        return this.db
            .then(function (db) { return db.get("DELETE FROM " + _this.tablename + " WHERE _id = '" + id + "'"); });
    };
    LocalDB.prototype.dropTable = function () {
        var _this = this;
        return this.db
            .then(function (db) { return db.get("DROP TABLE " + _this.tablename); });
    };
    LocalDB.prototype.createTable = function () {
        this._setTable();
    };
    LocalDB.prototype.removeAll = function () {
        var _this = this;
        return this.db
            .then(function (db) { return db.get("DELETE FROM " + _this.tablename); });
    };
    LocalDB.prototype.addItem = function (name) {
        var _this = this;
        var id = Math.ceil(Math.random() * 10000);
        var _id = "HKJHKADSF923F" + id;
        var schm = "HKJHKADSF923FLLJD987987";
        var created = '2017-06-01T02:50:39.581Z';
        var updated = JSON.stringify([{ "user": "lkajslk2342", "date": "2017-06-01T02:50:39.581Z" }]);
        var attributes = JSON.stringify([{ "id": "laksdjlK234B", "string": "planta" }, { "id": "OOIjlkla3234", "number": 5 }, { "id": "UYUY89987979", "number": 12 }, { "id": "QEEWE6666GDG", "number": 123 }]);
        return this.db.then(function (db) {
            return db.execSQL("\n                INSERT INTO " + _this.tablename + " VALUES ('" + _id + "','" + schm + "','" + created + "','" + updated + "','" + attributes + "'," + (new Date().getTime()) + ");\n                ")
                .catch(function (e) { console.log(e); });
        });
    };
    LocalDB.prototype.getItems = function () {
        var _this = this;
        return this.db.then(function (db) { return db.all("SELECT * FROM " + _this.tablename); });
    };
    LocalDB.prototype.find = function () {
        var _this = this;
        return this.db.then(function (db) { return db.all("SELECT * FROM " + _this.tablename); })
            .then(function (rows) {
            return rows.map(function (x) { return _this._parseRow(x); });
        })
            .catch(function (e) { console.log(e); });
    };
    LocalDB.prototype._parseRow = function (row) {
        return {
            _id: row[0],
            schm: row[1],
            created: row[2],
            updated: JSON.parse(row[3]),
            attributes: JSON.parse(row[4])
        };
    };
    LocalDB.prototype._stringifyRow = function (value) {
        return [
            value._id,
            value.schm,
            value.created,
            JSON.stringify(value.updated),
            JSON.stringify(value.attributes),
            (new Date().getTime())
        ];
    };
    return LocalDB;
}());
exports.LocalDB = LocalDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3FsaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFHOUM7SUFJSSxpQkFBWSxTQUFpQjtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLDJCQUFTLEdBQWpCO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ0osTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsc0RBQ2UsS0FBSSxDQUFDLFNBQVMsaVdBUzlDLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxFQUFGLENBQUUsQ0FBQztpQkFDZCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRU0seUJBQU8sR0FBZCxVQUFlLEVBQVU7UUFBekIsaUJBT0M7UUFORyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFpQixLQUFJLENBQUMsU0FBUyxzQkFBaUIsRUFBRSxNQUFHLENBQUMsRUFBN0QsQ0FBNkQsQ0FBQzthQUN6RSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxL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QUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRU8sMkJBQVMsR0FBakIsVUFBa0IsR0FBVTtRQUN4QixNQUFNLENBQUM7WUFDSCxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDLENBQUM7SUFDTixDQUFDO0lBRU8sK0JBQWEsR0FBckIsVUFBc0IsS0FBb0Y7UUFDdEcsTUFBTSxDQUFDO1lBQ0gsS0FBSyxDQUFDLEdBQUc7WUFDVCxLQUFLLENBQUMsSUFBSTtZQUNWLEtBQUssQ0FBQyxPQUFPO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNoQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekIsQ0FBQTtJQUNMLENBQUM7SUFHTCxjQUFDO0FBQUQsQ0FBQyxBQTNIRCxJQTJIQztBQTNIWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNxbGl0ZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zcWxpdGUnKTtcblxuXG5leHBvcnQgY2xhc3MgTG9jYWxEQiB7XG4gICAgcHVibGljIHRhYmxlbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkYjogYW55O1xuXG4gICAgY29uc3RydWN0b3IodGFibGVuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50YWJsZW5hbWUgPSB0YWJsZW5hbWU7XG4gICAgICAgIHRoaXMuX3NldFRhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0VGFibGUoKSB7XG4gICAgICAgIHRoaXMuZGIgPSAobmV3IFNxbGl0ZShcImRhdGFiYXNlLmRiXCIpKVxuICAgICAgICAgICAgLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYi5leGVjU1FMKGBcbiAgICAgICAgICAgICAgICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgJHt0aGlzLnRhYmxlbmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkIHZhcmNoYXIoMjU1KSBQUklNQVJZIEtFWSAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NobSBURVhULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkIFRFWFQgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgSlNPTixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIE5VTUVSSUNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihpZCA9PiBkYilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IHRocm93IGVycjsgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IHRocm93IGVycjsgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZE9uZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiXG4gICAgICAgICAgICAudGhlbihkYiA9PiBkYi5nZXQoYFNFTEVDVCAqIEZST00gJHt0aGlzLnRhYmxlbmFtZX0gV0hFUkUgX2lkID0gJyR7aWR9J2ApKVxuICAgICAgICAgICAgLnRoZW4ocm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93KSByZXR1cm4gdGhpcy5fcGFyc2VSb3cocm93KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0KHZhbHVlOiB7IF9pZDogc3RyaW5nLCBzY2htOiBzdHJpbmcsIGNyZWF0ZWQ6IHN0cmluZywgdXBkYXRlZDogYW55LCBhdHRyaWJ1dGVzOiBhbnkgfSwgdXBkYXRlZD86IG51bWJlcikge1xuICAgICAgICBjb25zdCBkb2M6IGFueVtdID0gdGhpcy5fc3RyaW5naWZ5Um93KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIudGhlbihkYiA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBkYi5leGVjU1FMKGBcbiAgICAgICAgICAgICAgICBJTlNFUlQgSU5UTyAke3RoaXMudGFibGVuYW1lfSBWQUxVRVMgKCcke2RvY1swXX0nLCcke2RvY1sxXX0nLCcke2RvY1syXX0nLCcke2RvY1szXX0nLCcke2RvY1s0XX0nLCR7dXBkYXRlZCB8IGRvY1s1XX0pO1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgKGVyciwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgY29uc29sZS5sb2coJ0VSUk9SIEVOIElOU0VSVEFSJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsIGlkIGVzJyArIGlkKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYlxuICAgICAgICAgICAgLnRoZW4oZGIgPT4gZGIuZ2V0KGBERUxFVEUgRlJPTSAke3RoaXMudGFibGVuYW1lfSBXSEVSRSBfaWQgPSAnJHtpZH0nYCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcm9wVGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiXG4gICAgICAgICAgICAudGhlbihkYiA9PiBkYi5nZXQoYERST1AgVEFCTEUgJHt0aGlzLnRhYmxlbmFtZX1gKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVRhYmxlKCl7XG4gICAgICAgIHRoaXMuX3NldFRhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcbiAgICAgICAgICAgIC50aGVuKGRiID0+IGRiLmdldChgREVMRVRFIEZST00gJHt0aGlzLnRhYmxlbmFtZX1gKSk7XG4gICAgfVxuXG5cbiAgICBhZGRJdGVtKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBpZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuICAgICAgICBjb25zdCBfaWQgPSBgSEtKSEtBRFNGOTIzRiR7aWR9YDtcbiAgICAgICAgY29uc3Qgc2NobSA9IGBIS0pIS0FEU0Y5MjNGTExKRDk4Nzk4N2A7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSAnMjAxNy0wNi0wMVQwMjo1MDozOS41ODFaJztcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IEpTT04uc3RyaW5naWZ5KFt7IFwidXNlclwiOiBcImxrYWpzbGsyMzQyXCIsIFwiZGF0ZVwiOiBcIjIwMTctMDYtMDFUMDI6NTA6MzkuNTgxWlwiIH1dKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IEpTT04uc3RyaW5naWZ5KFt7IFwiaWRcIjogXCJsYWtzZGpsSzIzNEJcIiwgXCJzdHJpbmdcIjogXCJwbGFudGFcIiB9LCB7IFwiaWRcIjogXCJPT0lqbGtsYTMyMzRcIiwgXCJudW1iZXJcIjogNSB9LCB7IFwiaWRcIjogXCJVWVVZODk5ODc5NzlcIiwgXCJudW1iZXJcIjogMTIgfSwgeyBcImlkXCI6IFwiUUVFV0U2NjY2R0RHXCIsIFwibnVtYmVyXCI6IDEyMyB9XSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRiLmV4ZWNTUUwoYFxuICAgICAgICAgICAgICAgIElOU0VSVCBJTlRPICR7dGhpcy50YWJsZW5hbWV9IFZBTFVFUyAoJyR7X2lkfScsJyR7c2NobX0nLCcke2NyZWF0ZWR9JywnJHt1cGRhdGVkfScsJyR7YXR0cmlidXRlc30nLCR7KG5ldyBEYXRlKCkuZ2V0VGltZSgpKX0pO1xuICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4geyBjb25zb2xlLmxvZyhlKSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnRoZW4oZGIgPT4gZGIuYWxsKGBTRUxFQ1QgKiBGUk9NICR7dGhpcy50YWJsZW5hbWV9YCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi50aGVuKGRiID0+IGRiLmFsbChgU0VMRUNUICogRlJPTSAke3RoaXMudGFibGVuYW1lfWApKVxuICAgICAgICAgICAgLnRoZW4oKHJvd3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd3MubWFwKHggPT4gdGhpcy5fcGFyc2VSb3coeCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZVJvdyhyb3c6IGFueVtdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfaWQ6IHJvd1swXSxcbiAgICAgICAgICAgIHNjaG06IHJvd1sxXSxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHJvd1syXSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IEpTT04ucGFyc2Uocm93WzNdKSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IEpTT04ucGFyc2Uocm93WzRdKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0cmluZ2lmeVJvdyh2YWx1ZTogeyBfaWQ6IHN0cmluZywgc2NobTogc3RyaW5nLCBjcmVhdGVkOiBzdHJpbmcsIHVwZGF0ZWQ6IGFueSwgYXR0cmlidXRlczogYW55IH0pOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB2YWx1ZS5faWQsXG4gICAgICAgICAgICB2YWx1ZS5zY2htLFxuICAgICAgICAgICAgdmFsdWUuY3JlYXRlZCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlLnVwZGF0ZWQpLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUuYXR0cmlidXRlcyksXG4gICAgICAgICAgICAobmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICAgIF1cbiAgICB9XG5cblxufSJdfQ==
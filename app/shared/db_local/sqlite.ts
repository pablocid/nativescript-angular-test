const Sqlite = require('nativescript-sqlite');


export class LocalDB {
    public tablename: string;
    public db: any;

    constructor(tablename: string) {
        this.tablename = tablename;
        this._setTable();
    }

    private _setTable() {
        this.db = (new Sqlite("database.db"))
            .then(db => {
                return db.execSQL(`
                    CREATE TABLE IF NOT EXISTS ${this.tablename} 
                        (
                            _id varchar(255) PRIMARY KEY ,
                            schm TEXT,
                            created TEXT,
                            updated TEXT ,
                            attributes JSON,
                            date NUMERIC
                        )
                `)
                    .then(id => db)
                    .catch(err => { throw err; });
            })
            .catch(err => { throw err; })
    }

    public findOne(id: string) {
        return this.db
            .then(db => db.get(`SELECT * FROM ${this.tablename} WHERE _id = '${id}'`))
            .then(row => {
                if (row) return this._parseRow(row);
                return row;
            })
    }

    public insert(value: { _id: string, schm: string, created: string, updated: any, attributes: any }, updated?: number) {
        const doc: any[] = this._stringifyRow(value);
        return this.db.then(db => {
            if (!value) return null;
            return db.execSQL(`
                INSERT INTO ${this.tablename} VALUES ('${doc[0]}','${doc[1]}','${doc[2]}','${doc[3]}','${doc[4]}',${updated | doc[5]});
                `,
                (err, id) => {
                    if (err) console.log('ERROR EN INSERTAR', err);
                    console.log('el id es' + id);

                }
            );
        });
    }

    public remove(id: string) {
        return this.db
            .then(db => db.get(`DELETE FROM ${this.tablename} WHERE _id = '${id}'`));
    }

    public dropTable() {
        return this.db
            .then(db => db.get(`DROP TABLE ${this.tablename}`));
    }

    public createTable(){
        this._setTable();
    }

    public removeAll() {
        return this.db
            .then(db => db.get(`DELETE FROM ${this.tablename}`));
    }


    addItem(name: string) {
        const id = Math.ceil(Math.random() * 10000);
        const _id = `HKJHKADSF923F${id}`;
        const schm = `HKJHKADSF923FLLJD987987`;
        const created = '2017-06-01T02:50:39.581Z';
        const updated = JSON.stringify([{ "user": "lkajslk2342", "date": "2017-06-01T02:50:39.581Z" }]);
        const attributes = JSON.stringify([{ "id": "laksdjlK234B", "string": "planta" }, { "id": "OOIjlkla3234", "number": 5 }, { "id": "UYUY89987979", "number": 12 }, { "id": "QEEWE6666GDG", "number": 123 }]);
        return this.db.then(db => {
            return db.execSQL(`
                INSERT INTO ${this.tablename} VALUES ('${_id}','${schm}','${created}','${updated}','${attributes}',${(new Date().getTime())});
                `)
                .catch(e => { console.log(e) });
        });
    }

    getItems() {
        return this.db.then(db => db.all(`SELECT * FROM ${this.tablename}`));
    }

    public find() {
        return this.db.then(db => db.all(`SELECT * FROM ${this.tablename}`))
            .then((rows: any[]) => {
                return rows.map(x => this._parseRow(x));
            })
            .catch(e => { console.log(e) })
    }

    private _parseRow(row: any[]) {
        return {
            _id: row[0],
            schm: row[1],
            created: row[2],
            updated: JSON.parse(row[3]),
            attributes: JSON.parse(row[4])
        };
    }

    private _stringifyRow(value: { _id: string, schm: string, created: string, updated: any, attributes: any }): any[] {
        return [
            value._id,
            value.schm,
            value.created,
            JSON.stringify(value.updated),
            JSON.stringify(value.attributes),
            (new Date().getTime())
        ]
    }


}
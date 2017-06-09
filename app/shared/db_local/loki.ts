import { path as Path, knownFolders as KnownFolders } from 'file-system';
import Loki = require('lokijs');
import * as LokiAdapter from 'loki-nativescript-adapter';
import * as Q from 'q';
import { LokiFace, LokiChain, LokiCollection } from './loki.interfaces';

const e5 = require('../../E5.json');
const schemas = require('../../schemas.json');
require('nativescript-async');


export class Collection {


    public static LokiPromise(): Promise<LokiFace> {
        const dbPath = Path.join(KnownFolders.currentApp().path, "main.db");
        const db: LokiFace = new Loki<LokiFace>(dbPath, { adapter: new LokiAdapter(), indices: ['_id'], autoload: true, autosave: true });

        return new Promise((resolve, reject) => {
            db.loadDatabase({}, () => {
                resolve(db);
            })
        });
    }

    public static getCollection(name: string): Promise<LokiCollection> {
        const dbPath = Path.join(KnownFolders.currentApp().path, "main.db");
        const db: LokiFace = new Loki<LokiFace>(dbPath, { adapter: new LokiAdapter(), indices: ['_id'], autoload: true, autosave: true });

        return new Promise((resolve, reject) => {
            db.loadDatabase({}, () => {
                resolve(db.getCollection(name));
            })
        });
    }

    public static Loki() {
        const dbPath = Path.join(KnownFolders.currentApp().path, "main.db");
        return new Loki<LokiFace>(dbPath, { adapter: new LokiAdapter(), indices: ['_id'], autoload: true, autosave: true });
    }

    public static setCollection(collectionName: string, docs: any[]): Promise<boolean> {

        return Collection.LokiPromise()
            .then(db => {
                if (db.getCollection(collectionName)) return { collection: db.getCollection(collectionName), db };

                return { collection: db.addCollection(collectionName), db };
            })
            .then(x => {
                x.collection.removeDataOnly();
                x.db.saveDatabase();
                return x;
            })
            .then(x => {
                if (docs && Array.isArray(docs) && docs.length) {
                    for (var i = 0; i < docs.length; i++) {
                        x.collection.insert(docs[i]);
                    }
                    x.db.saveDatabase();
                    return true;
                } else {
                    return false;
                }

            });
    }

    public static addToCollection(collectionName: string, docs: any[]): Promise<boolean> {

        return Collection.LokiPromise()
            .then(db => {
                if (db.getCollection(collectionName)) return { collection: db.getCollection(collectionName), db };

                return { collection: db.addCollection(collectionName), db };
            })
            .then(x => {
                if (docs && Array.isArray(docs) && docs.length) {
                    for (var i = 0; i < docs.length; i++) {
                        x.collection.insert(docs[i]);
                    }
                    x.db.saveDatabase();
                    return true;
                } else {
                    return false;
                }

            });
    }

    public name: string;
    private coll: any;
    public dbPath: string;
    public db: LokiFace;
    public loaded: boolean;

    constructor(name: string) {

        this.name = name;
        this.dbPath = Path.join(KnownFolders.currentApp().path, "main.db");
        this.db = new Loki<LokiFace>(this.dbPath, { adapter: new LokiAdapter(), indices: ['_id'], autoload: true });
    }

    private load(): Q.Promise<any> {
        const def = Q.defer();

        console.log('connecting to collection ...');
        this.db.loadDatabase({}, () => {

            // if (this.db.getCollection(this.name) === null) {
            //     console.log('creating collection !!!');
            //     def.resolve(this._create());
            // } else {
            def.resolve(this.db);
            //}
        });


        return def.promise;

    }

    public find(obj?: Object): Q.Promise<any[]> {
        return this.load()
            .then(x => x.getCollection(this.name))
            .then((c: LokiCollection) => c.find(obj));
    }

    public findOneAndSave(obj?: any): Q.Promise<{ coll: any, db: any }> {
        return this.load()
            .then(x => {
                return {
                    coll: x.getCollection(this.name),
                    db: x
                }
            })
            .then((c: any) => {
                return {
                    coll: c.coll.find(obj),
                    db: c.db
                }
            });
    }

    public raw() {
        return this.load()
            .then(x => x.getCollection(this.name))
            .then((c: LokiCollection) => c);
    }

    public findOne(obj?: any) {
        return this.load()
            .then(x => x.getCollection(this.name))
            .then((c: LokiCollection) => c.findOne(obj));
    }

    public getById(_id: string) {
        return this.findOne({ _id });
    }

    public update(obj: any) {
        return this.raw().then(c => {
            c.update(obj);
        });
    }

    public getFast() {
        return this.load()
            .then(x => {
                const a = x.getCollection(this.name);
                a.ensureUniqueIndex('_id');
                return a;
            })
            .then((c: LokiCollection) => {
                return (id: string) => {
                    return c.by('_id', id)
                }
            });
    }

    public chain(): Q.Promise<LokiChain> {
        return this.load()
            .then(x => x.getCollection(this.name))
            .then((c: LokiCollection) => c.chain());
    }

    public remove(id?: string) {
        return this.load()
            .then(x => x.getCollection(this.name))
            .then((c: LokiCollection) => c.remove(id));
    }

    public loadData(values: any[]): void {
        const data = this.db.addCollection(this.name);
        values.forEach(x => data.insert(x));
        this.db.saveDatabase();
    }

    public removeCollection(): Q.Promise<boolean> {
        return this.load()
            .then(x => x.getCollection(this.name))
            .then(x => {
                let s = this.db.removeCollection(this.name);
                this.save();
                return s;
            });
    }

    private _create(): LokiCollection {
        return this.db.addCollection(this.name);
    }

    public save() {
        this.db.saveDatabase();
    }

}
/*
        var pz = path.join(knownFolders.currentApp().path, "database.db");
        var db = new Loki(pz, { adapter: new LokiAdapter() });

        //var espaldera = db.addCollection("espaldera");
        //e5.items.forEach(x => espaldera.insert(x));
        //db.saveDatabase();


        //console.log('movies.data', JSON.stringify(movies.data));
        console.log(Object.keys(db));
        console.log(db.filename, db.collections, db.verbose)


        db.loadDatabase({}, function () {
            var e = db.getCollection("espaldera");
            console.log(e);
            
            console.log(
                JSON.stringify(
                    e.chain()
                        .where(r => {
                            return r.attributes.some(s => s.id === '5807af9231f55d0010aaffe5' && s.number === 5);
                        })
                        //.limit(5)
                        .data()
                        .map(c => c.attributes.filter(r => {
                            if (r.id === '5807afe331f55d0010aaffe6') return true;
                            return false;
                        }))
                        .map(x => x[0].number).sort((a, b) => a - b)
                )
            );
            
        });
        */
import { Injectable } from '@angular/core';
import { Plant } from '../record';
import { LokiFace, LokiChain, LokiCollection } from '../db_local/loki.interfaces';
import { path as Path, knownFolders as KnownFolders } from 'file-system';
import Loki = require('lokijs');
import * as LokiAdapter from 'loki-nativescript-adapter';
import * as Q from 'q'


//const desync = require('deasync');

@Injectable()
export class CollectionDB {

    public dbPath: string;
    public db: LokiFace;

    constructor() {
        this.dbPath = Path.join(KnownFolders.currentApp().path, "main.db");
        this.db = new Loki(this.dbPath, { adapter: new LokiAdapter(), indices: ['_id'], autoload: true });
    }

    getDb(): Promise<LokiFace> {
        return new Promise((resolve, reject) => {
            if (this.db.getCollection('schemas')) {
                resolve(this.db);
            } else {
                this.db.loadDatabase({}, () => {
                    resolve(this.db)
                });
            }
        })
    }

    getCollection(name: string) {
        return this.getDb().then(db => db.getCollection(name))
    }

    setCollection(name: string, data: any[]) {
        console.log(name);
        return this.getDb().then(db => {
            console.log('Loaded db', name);
            if (data && Array.isArray(data)) {
                let collection: LokiCollection;
                if (db.getCollection(name)) {
                    collection = db.getCollection(name);
                    collection.removeDataOnly();
                } else {
                    collection = db.addCollection(name);
                }

                for (var i = 0; i < data.length; i++) {
                    collection.insert(data[i]);
                }
                db.saveDatabase();
                return true;
            }
            return false;
        });
    }

    removeCollection(name: string) {
        return this.getDb().then(db => {
            db.removeCollection(name);
            db.saveDatabase();
            return true;
        });
    }



}
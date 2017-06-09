import { Component } from "@angular/core";
import { Router } from '@angular/router';
const Sqlite = require('nativescript-sqlite');
import { LocalDB } from '../../shared/db_local';


const ObjectID = require("bson-objectid");

@Component({
    selector: "list",
    templateUrl: "pages/list/list.html",
    //styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent {
    public table: string = 'Person';
    public db: LocalDB;
    public name: string;

    constructor(private router: Router) {

        this.db = new LocalDB('People');
    }

    goBack() {
        //alert('Go Back')
        this.router.navigate(["/"]);
    }

    dropTable() {
        this.db.dropTable();
        this.db.createTable();
        /*
        this.db.execSQL("DROP TABLE Person ", (e, d) => {
            if (e) { console.log(e) }
            console.log(d);
        });
        */
        /*
        this.db.removeAll().then(x => {
            console.log(JSON.stringify(x));
        })
            .catch(e => { console.log(e) })
            */
    }

    addItem(name: string) {
        const _id = `${ObjectID.generate()}`;
        const schm = `${ObjectID.generate()}`;
        const created = (new Date().toISOString());
        const updated = [{ user: `${ObjectID.generate()}`, date: (new Date().toISOString()) }];
        const attributes = [
            { id: `${ObjectID.generate()}`, string: "planta" },
            { id: `${ObjectID.generate()}`, number: 5 },
            { id: `${ObjectID.generate()}`, number: 12 },
            { id: `${ObjectID.generate()}`, number: 123 }
        ];
        const obj = { _id, schm, created, updated, attributes };

        this.db.insert(obj).then(x => {
            console.log('addItem', x);
        });
    }

    getItems() {
        /*
        this.db.findOne('HKJHKADSF923F5850').then(x=>{
            console.log(JSON.stringify(x));
        })
        .catch(e =>{console.log(e)})
        */

        this.db.find().then(x => {

            x.forEach(element => {
                console.log(JSON.stringify(element));
            });
        });

    }
}
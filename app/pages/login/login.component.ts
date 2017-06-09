import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page, EventData } from "ui/page";
import { Color } from 'color';
import { knownFolders, path } from 'file-system';

import * as LokiAdapter from 'loki-nativescript-adapter';
import Loki = require('lokijs');
import { Collection } from '../../shared/db_local';
import { CollectionDB } from '../../shared/services';
import { RecordController } from '../../shared/record'


const e5 = require('../../E5.json');
const schms = require('../../schemas.json');

require('nativescript-async');


@Component({
    selector: "my-app",
    templateUrl: 'pages/login/login.html',
    providers: [UserService],
    styleUrls: [`
        .small-spacing {
            margin: 5;
        }
        .medium-spacing {
            margin: 10;
        }
    `]
})
export class LoginComponent implements OnInit {
    public user: User;
    public isLoggingIn: boolean = false;
    public response: string;
    groceryList: Array<Object> = [];

    public db: any;

    constructor(
        private router: Router,
        private userService: UserService,
        private page: Page,
        private collectionDB: CollectionDB
    ) {
        this.user = new User();
        this.user.email = 'admin@agroinformatica.cl';
        this.user.password = 'admin';

        // const rc = new RecordController();

        // rc.getPlant('57a8d8deef44961377523ff3').then(x => {
        //     console.log(JSON.stringify(
        //         x.spot
        //     ));
        // })

        // rc.getRow(5, 11).then(x => {
        //     console.log(JSON.stringify(x
        //         .sort((a, b) => { return a.position - b.position })
        //         .map(z => z.spot)

        //     ));
        // })

        //collectionDB.removeCollection('schema');
        //collectionDB.removeCollection('espaldera');



        //Collection.setCollection('schema', schms.items);
        //Collection.setCollection('espaldera', e5.items);

        // Collection.getCollection('schema').then(x => {
        //     console.log(JSON.stringify(
        //         x.findOne()
        //     ))
        // })

        // Collection.getCollection('espaldera').then(x => {
        //     console.log(JSON.stringify(
        //         x.findOne()
        //     ))
        // })

        // const db = Collection.Loki();
        // // const schema = db.addCollection('schema');
        // // for (var i = 0; i < schms.items.length; i++) {
        // //     schema.insert(schms.items[i]);
        // // }
        // // db.saveDatabase();

        // // const schema = db.addCollection('schema');
        // // schema.insert({"_id":"57c869bf681695782c4d4907","type":"input","name":"simple_date","__v":0,"attributes":[{"id":"name","string":"simple_date","list":[]},{"id":"dataType","string":"date","list":[]}],"updated":[],"created":"2016-09-01T17:47:43.179Z"});
        // // db.saveDatabase();

        // Collection.LokiPromise().then(database => {
        //     console.log('Lokipromise')
        //     console.log(JSON.stringify(database.getCollection('schema').findOne()))
        // })

        // Collection.LokiPromise().then(database => {
        //     console.log('Lokipromise')
        //     console.log(JSON.stringify(database.getCollection('espaldera').findOne()))
        // })

        // Collection.getCollection('schema').then(x => {
        //     console.log('getCollection')
        //     console.log(JSON.stringify(x.findOne()))
        // })

        // db.loadDatabase({}, () => {
        //     let esqu = db.getCollection('schema');
        //     console.log(JSON.stringify(esqu.findOne()))

        //     //esqu.insert({ "_id": "57c869bf681695782c4d4907", "type": "input", "name": "simple_date", "__v": 0, "attributes": [{ "id": "name", "string": "simple_date", "list": [] }, { "id": "dataType", "string": "date", "list": [] }], "updated": [], "created": "2016-09-01T17:47:43.179Z" });
        //     //esqu.removeDataOnly();
        //     //db.saveDatabase();
        //     // if (!esqu) {
        //     //     esqu = db.addCollection('schema');
        //     // }
        //     // for (var i = 0; i < schms.items.length; i++) {
        //     //     esqu.insert(schms.items[i]);
        //     // }
        //     // db.saveDatabase();

        //     //let espaldera = db.getCollection('espaldera');
        //     // if (!espaldera) {
        //     //     espaldera = db.addCollection('espaldera');
        //     // }
        //     // for (var i = 0; i < e5.items.length; i++) {
        //     //     espaldera.insert(e5.items[i]);
        //     // }
        //     // db.saveDatabase()

        //     // let w = db.getCollection('espaldera');
        //     // console.log(JSON.stringify(w.findOne()))

        // });


        // const db2 = Collection.Loki();
        // db2.loadDatabase({}, () => {
        //     let esqu = db.getCollection('schema');
        //     console.log(JSON.stringify(esqu.findOne()))

        //     //esqu.insert({ "_id": "57c869bf681695782c4d4907", "type": "input", "name": "simple_date", "__v": 0, "attributes": [{ "id": "name", "string": "simple_date", "list": [] }, { "id": "dataType", "string": "date", "list": [] }], "updated": [], "created": "2016-09-01T17:47:43.179Z" });
        //     //esqu.removeDataOnly();
        //     //db.saveDatabase();
        //     // if (!esqu) {
        //     //     esqu = db.addCollection('schema');
        //     // }
        //     // for (var i = 0; i < schms.items.length; i++) {
        //     //     esqu.insert(schms.items[i]);
        //     // }
        //     // db.saveDatabase();

        //     //let espaldera = db.getCollection('espaldera');
        //     // if (!espaldera) {
        //     //     espaldera = db.addCollection('espaldera');
        //     // }
        //     // for (var i = 0; i < e5.items.length; i++) {
        //     //     espaldera.insert(e5.items[i]);
        //     // }
        //     // db.saveDatabase()

        //     let w = db.getCollection('espaldera');
        //     console.log(JSON.stringify(w.findOne()))

        // });

        // db.loadDatabase({}, () => {
        //     let w = db.getCollection('espaldera');
        //     console.log(JSON.stringify(w.findOne()))
        // });

        //let w = db.getCollection('espaldera');
        //console.log(JSON.stringify(w.findOne()))

        // let espaldera = db.addCollection('espaldera');
        // for (var i = 0; i < e5.items.length; i++) {
        //     espaldera.insert(e5.items[i]);
        // }
        // db.saveDatabase();

        // db.loadDatabase({}, ()=>{
        //     let w = db.getCollection('espaldera');
        //     console.log(JSON.stringify( w.findOne() ))

        // });


        //const schemas = new Collection('schemas');
        //const coll = new Collection('espaldera');
        //console.log(schm.find({}).map(x => x._id))

        // schemas.db.loadDatabase({}, () => {
        //     const schm = schemas.db.getCollection('schemas')
        //     console.log(schm.find({}).map(x => x._id))
        // })

        // schemas._loadDatabase().then(db =>{
        //     const s = db.getCollection('schemas')
        //     console.log(s.find({}).map(x=>x._id))
        // })
        // ( async ()=>{
        //     const s:any = await schemas._loadDatabase();
        //     const p = s.getCollection('schemas')
        //     console.log(p.find({}).map(x=>x._id))
        // } )()

        //const p = schemas.ld().getCollection('schemas')
        //console.log(p.find({}).map(x=>x._id))

        //const coll = new Collection('espaldera');
        //schemas.removeCollection();
        //schemas.loadData(schms.items);

        // Collection.setCollection('schemas', schms.items );
        // Collection.setCollection('espaldera', e5.items );


        //const collection = db.getCollection('espaldera');


        //schemas.findOne().then(x => console.log(JSON.stringify(x)));
        //coll.findOne().then(x => console.log(JSON.stringify(x)));

        //coll.removeCollection()
        //coll.loadData(e5.items);

        // const controller = new RecordController('espaldera');
        // controller.getRecord('57a8d8dfef44961377526dfd')
        //     .then(x => console.log(JSON.stringify(x)));

    }

    ngOnInit() {

        this.page.actionBarHidden = true;
        this.page.backgroundColor = new Color('green');
        this.page.on(Page.loadedEvent, (data: EventData) => {
            console.log('navegando en login')
        });
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    }

    submit() {
        if (!this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
        this.userService.login(this.user)
            .subscribe(
            (value) => {
                this.response = JSON.stringify(value);
                this.router.navigate(["/evaluaciones"])
            },
            (error) => alert("Unfortunately we could not find your account.")
            );
    }
    signUp() {
        this.userService.register(this.user)
            .subscribe(
            (value) => {
                this.response = JSON.stringify(value);
                this.toggleDisplay();
            },
            () => alert("Unfortunately we were unable to create your account.")
            );
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    gotTo(value: string) {
        this.router.navigate(['/' + value]);
    }

    loadEspaldera() {
        this.collectionDB.setCollection('espaldera', e5.items).then(x => console.log(x));
    }

    loadSchema() {
        this.collectionDB.setCollection('schema', schms.items).then(x => console.log(x));
    }

    showSchema() {
        this.collectionDB.getCollection('schema')
            .then(db => {
                console.log(JSON.stringify(
                    db.findOne()
                ))
            })
    }

    showPlanta() {
        this.collectionDB.getCollection('espaldera')
            .then(db => {
                console.log(JSON.stringify(
                    db.findOne()
                ))
            })
    }



    removeSchema() {
        this.collectionDB.removeCollection('schema').then(x => console.log(x))
    }

    removePlanta() {
        this.collectionDB.removeCollection('espaldera').then(x => console.log(x))
    }

    insert(value: any) {
        //this.db.insert(value, (err, newDoc) => { console.log(newDoc) })
        //
    }

}

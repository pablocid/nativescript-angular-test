"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var services_1 = require("../../shared/services");
var e5 = require('../../E5.json');
var schms = require('../../schemas.json');
require('nativescript-async');
var LoginComponent = (function () {
    function LoginComponent(router, userService, page, collectionDB) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.collectionDB = collectionDB;
        this.isLoggingIn = false;
        this.groceryList = [];
        this.user = new user_1.User();
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
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = new color_1.Color('green');
        this.page.on(page_1.Page.loadedEvent, function (data) {
            console.log('navegando en login');
        });
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    };
    LoginComponent.prototype.submit = function () {
        if (!this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (value) {
            _this.response = JSON.stringify(value);
            _this.router.navigate(["/evaluaciones"]);
        }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function (value) {
            _this.response = JSON.stringify(value);
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.gotTo = function (value) {
        this.router.navigate(['/' + value]);
    };
    LoginComponent.prototype.loadEspaldera = function () {
        this.collectionDB.setCollection('espaldera', e5.items).then(function (x) { return console.log(x); });
    };
    LoginComponent.prototype.loadSchema = function () {
        this.collectionDB.setCollection('schema', schms.items).then(function (x) { return console.log(x); });
    };
    LoginComponent.prototype.showSchema = function () {
        this.collectionDB.getCollection('schema')
            .then(function (db) {
            console.log(JSON.stringify(db.findOne()));
        });
    };
    LoginComponent.prototype.showPlanta = function () {
        this.collectionDB.getCollection('espaldera')
            .then(function (db) {
            console.log(JSON.stringify(db.findOne()));
        });
    };
    LoginComponent.prototype.removeSchema = function () {
        this.collectionDB.removeCollection('schema').then(function (x) { return console.log(x); });
    };
    LoginComponent.prototype.removePlanta = function () {
        this.collectionDB.removeCollection('espaldera').then(function (x) { return console.log(x); });
    };
    LoginComponent.prototype.insert = function (value) {
        //this.db.insert(value, (err, newDoc) => { console.log(newDoc) })
        //
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'pages/login/login.html',
        providers: [user_service_1.UserService],
        styleUrls: ["\n        .small-spacing {\n            margin: 5;\n        }\n        .medium-spacing {\n            margin: 10;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        page_1.Page,
        services_1.CollectionDB])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUEwQztBQUMxQywrQkFBOEI7QUFNOUIsa0RBQXFEO0FBSXJELElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNwQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU1QyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQWdCOUIsSUFBYSxjQUFjO0lBUXZCLHdCQUNZLE1BQWMsRUFDZCxXQUF3QixFQUN4QixJQUFVLEVBQ1YsWUFBMEI7UUFIMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVYvQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVwQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFVNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDBCQUEwQixDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUU3QixxQ0FBcUM7UUFFckMsc0RBQXNEO1FBQ3RELGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLEtBQUs7UUFFTCwrQkFBK0I7UUFDL0IsbUNBQW1DO1FBQ25DLDhEQUE4RDtRQUM5RCw0QkFBNEI7UUFFNUIsVUFBVTtRQUNWLEtBQUs7UUFFTCwwQ0FBMEM7UUFDMUMsNkNBQTZDO1FBSTdDLGtEQUFrRDtRQUNsRCxrREFBa0Q7UUFFbEQs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QUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7YUFDdkMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUNmLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUlELHFDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxLQUFVO1FBQ2IsaUVBQWlFO1FBQ2pFLEVBQUU7SUFDTixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBdlNELElBdVNDO0FBdlNZLGNBQWM7SUFiMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixTQUFTLEVBQUUsQ0FBQyxvSUFPWCxDQUFDO0tBQ0wsQ0FBQztxQ0FVc0IsZUFBTTtRQUNELDBCQUFXO1FBQ2xCLFdBQUk7UUFDSSx1QkFBWTtHQVo3QixjQUFjLENBdVMxQjtBQXZTWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlLCBFdmVudERhdGEgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIHBhdGggfSBmcm9tICdmaWxlLXN5c3RlbSc7XG5cbmltcG9ydCAqIGFzIExva2lBZGFwdGVyIGZyb20gJ2xva2ktbmF0aXZlc2NyaXB0LWFkYXB0ZXInO1xuaW1wb3J0IExva2kgPSByZXF1aXJlKCdsb2tpanMnKTtcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvZGJfbG9jYWwnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkRCIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IFJlY29yZENvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVjb3JkJ1xuXG5cbmNvbnN0IGU1ID0gcmVxdWlyZSgnLi4vLi4vRTUuanNvbicpO1xuY29uc3Qgc2NobXMgPSByZXF1aXJlKCcuLi8uLi9zY2hlbWFzLmpzb24nKTtcblxucmVxdWlyZSgnbmF0aXZlc2NyaXB0LWFzeW5jJyk7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbYFxuICAgICAgICAuc21hbGwtc3BhY2luZyB7XG4gICAgICAgICAgICBtYXJnaW46IDU7XG4gICAgICAgIH1cbiAgICAgICAgLm1lZGl1bS1zcGFjaW5nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTA7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHVzZXI6IFVzZXI7XG4gICAgcHVibGljIGlzTG9nZ2luZ0luOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHJlc3BvbnNlOiBzdHJpbmc7XG4gICAgZ3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICAgIHB1YmxpYyBkYjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgY29sbGVjdGlvbkRCOiBDb2xsZWN0aW9uREJcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gJ2FkbWluQGFncm9pbmZvcm1hdGljYS5jbCc7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9ICdhZG1pbic7XG5cbiAgICAgICAgLy8gY29uc3QgcmMgPSBuZXcgUmVjb3JkQ29udHJvbGxlcigpO1xuXG4gICAgICAgIC8vIHJjLmdldFBsYW50KCc1N2E4ZDhkZWVmNDQ5NjEzNzc1MjNmZjMnKS50aGVuKHggPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIC8vICAgICAgICAgeC5zcG90XG4gICAgICAgIC8vICAgICApKTtcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyByYy5nZXRSb3coNSwgMTEpLnRoZW4oeCA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4XG4gICAgICAgIC8vICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEucG9zaXRpb24gLSBiLnBvc2l0aW9uIH0pXG4gICAgICAgIC8vICAgICAgICAgLm1hcCh6ID0+IHouc3BvdClcblxuICAgICAgICAvLyAgICAgKSk7XG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy9jb2xsZWN0aW9uREIucmVtb3ZlQ29sbGVjdGlvbignc2NoZW1hJyk7XG4gICAgICAgIC8vY29sbGVjdGlvbkRCLnJlbW92ZUNvbGxlY3Rpb24oJ2VzcGFsZGVyYScpO1xuXG5cblxuICAgICAgICAvL0NvbGxlY3Rpb24uc2V0Q29sbGVjdGlvbignc2NoZW1hJywgc2NobXMuaXRlbXMpO1xuICAgICAgICAvL0NvbGxlY3Rpb24uc2V0Q29sbGVjdGlvbignZXNwYWxkZXJhJywgZTUuaXRlbXMpO1xuXG4gICAgICAgIC8vIENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbignc2NoZW1hJykudGhlbih4ID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAvLyAgICAgICAgIHguZmluZE9uZSgpXG4gICAgICAgIC8vICAgICApKVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbignZXNwYWxkZXJhJykudGhlbih4ID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAvLyAgICAgICAgIHguZmluZE9uZSgpXG4gICAgICAgIC8vICAgICApKVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIGNvbnN0IGRiID0gQ29sbGVjdGlvbi5Mb2tpKCk7XG4gICAgICAgIC8vIC8vIGNvbnN0IHNjaGVtYSA9IGRiLmFkZENvbGxlY3Rpb24oJ3NjaGVtYScpO1xuICAgICAgICAvLyAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHNjaG1zLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIC8vICAgICBzY2hlbWEuaW5zZXJ0KHNjaG1zLml0ZW1zW2ldKTtcbiAgICAgICAgLy8gLy8gfVxuICAgICAgICAvLyAvLyBkYi5zYXZlRGF0YWJhc2UoKTtcblxuICAgICAgICAvLyAvLyBjb25zdCBzY2hlbWEgPSBkYi5hZGRDb2xsZWN0aW9uKCdzY2hlbWEnKTtcbiAgICAgICAgLy8gLy8gc2NoZW1hLmluc2VydCh7XCJfaWRcIjpcIjU3Yzg2OWJmNjgxNjk1NzgyYzRkNDkwN1wiLFwidHlwZVwiOlwiaW5wdXRcIixcIm5hbWVcIjpcInNpbXBsZV9kYXRlXCIsXCJfX3ZcIjowLFwiYXR0cmlidXRlc1wiOlt7XCJpZFwiOlwibmFtZVwiLFwic3RyaW5nXCI6XCJzaW1wbGVfZGF0ZVwiLFwibGlzdFwiOltdfSx7XCJpZFwiOlwiZGF0YVR5cGVcIixcInN0cmluZ1wiOlwiZGF0ZVwiLFwibGlzdFwiOltdfV0sXCJ1cGRhdGVkXCI6W10sXCJjcmVhdGVkXCI6XCIyMDE2LTA5LTAxVDE3OjQ3OjQzLjE3OVpcIn0pO1xuICAgICAgICAvLyAvLyBkYi5zYXZlRGF0YWJhc2UoKTtcblxuICAgICAgICAvLyBDb2xsZWN0aW9uLkxva2lQcm9taXNlKCkudGhlbihkYXRhYmFzZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnTG9raXByb21pc2UnKVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2UuZ2V0Q29sbGVjdGlvbignc2NoZW1hJykuZmluZE9uZSgpKSlcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyBDb2xsZWN0aW9uLkxva2lQcm9taXNlKCkudGhlbihkYXRhYmFzZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnTG9raXByb21pc2UnKVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2UuZ2V0Q29sbGVjdGlvbignZXNwYWxkZXJhJykuZmluZE9uZSgpKSlcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyBDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ3NjaGVtYScpLnRoZW4oeCA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnZ2V0Q29sbGVjdGlvbicpXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4LmZpbmRPbmUoKSkpXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gZGIubG9hZERhdGFiYXNlKHt9LCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgZXNxdSA9IGRiLmdldENvbGxlY3Rpb24oJ3NjaGVtYScpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXNxdS5maW5kT25lKCkpKVxuXG4gICAgICAgIC8vICAgICAvL2VzcXUuaW5zZXJ0KHsgXCJfaWRcIjogXCI1N2M4NjliZjY4MTY5NTc4MmM0ZDQ5MDdcIiwgXCJ0eXBlXCI6IFwiaW5wdXRcIiwgXCJuYW1lXCI6IFwic2ltcGxlX2RhdGVcIiwgXCJfX3ZcIjogMCwgXCJhdHRyaWJ1dGVzXCI6IFt7IFwiaWRcIjogXCJuYW1lXCIsIFwic3RyaW5nXCI6IFwic2ltcGxlX2RhdGVcIiwgXCJsaXN0XCI6IFtdIH0sIHsgXCJpZFwiOiBcImRhdGFUeXBlXCIsIFwic3RyaW5nXCI6IFwiZGF0ZVwiLCBcImxpc3RcIjogW10gfV0sIFwidXBkYXRlZFwiOiBbXSwgXCJjcmVhdGVkXCI6IFwiMjAxNi0wOS0wMVQxNzo0Nzo0My4xNzlaXCIgfSk7XG4gICAgICAgIC8vICAgICAvL2VzcXUucmVtb3ZlRGF0YU9ubHkoKTtcbiAgICAgICAgLy8gICAgIC8vZGIuc2F2ZURhdGFiYXNlKCk7XG4gICAgICAgIC8vICAgICAvLyBpZiAoIWVzcXUpIHtcbiAgICAgICAgLy8gICAgIC8vICAgICBlc3F1ID0gZGIuYWRkQ29sbGVjdGlvbignc2NoZW1hJyk7XG4gICAgICAgIC8vICAgICAvLyB9XG4gICAgICAgIC8vICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHNjaG1zLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAvLyAgICAgZXNxdS5pbnNlcnQoc2NobXMuaXRlbXNbaV0pO1xuICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAvLyAgICAgLy8gZGIuc2F2ZURhdGFiYXNlKCk7XG5cbiAgICAgICAgLy8gICAgIC8vbGV0IGVzcGFsZGVyYSA9IGRiLmdldENvbGxlY3Rpb24oJ2VzcGFsZGVyYScpO1xuICAgICAgICAvLyAgICAgLy8gaWYgKCFlc3BhbGRlcmEpIHtcbiAgICAgICAgLy8gICAgIC8vICAgICBlc3BhbGRlcmEgPSBkYi5hZGRDb2xsZWN0aW9uKCdlc3BhbGRlcmEnKTtcbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgZTUuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIC8vICAgICBlc3BhbGRlcmEuaW5zZXJ0KGU1Lml0ZW1zW2ldKTtcbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gICAgIC8vIGRiLnNhdmVEYXRhYmFzZSgpXG5cbiAgICAgICAgLy8gICAgIC8vIGxldCB3ID0gZGIuZ2V0Q29sbGVjdGlvbignZXNwYWxkZXJhJyk7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh3LmZpbmRPbmUoKSkpXG5cbiAgICAgICAgLy8gfSk7XG5cblxuICAgICAgICAvLyBjb25zdCBkYjIgPSBDb2xsZWN0aW9uLkxva2koKTtcbiAgICAgICAgLy8gZGIyLmxvYWREYXRhYmFzZSh7fSwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGVzcXUgPSBkYi5nZXRDb2xsZWN0aW9uKCdzY2hlbWEnKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVzcXUuZmluZE9uZSgpKSlcblxuICAgICAgICAvLyAgICAgLy9lc3F1Lmluc2VydCh7IFwiX2lkXCI6IFwiNTdjODY5YmY2ODE2OTU3ODJjNGQ0OTA3XCIsIFwidHlwZVwiOiBcImlucHV0XCIsIFwibmFtZVwiOiBcInNpbXBsZV9kYXRlXCIsIFwiX192XCI6IDAsIFwiYXR0cmlidXRlc1wiOiBbeyBcImlkXCI6IFwibmFtZVwiLCBcInN0cmluZ1wiOiBcInNpbXBsZV9kYXRlXCIsIFwibGlzdFwiOiBbXSB9LCB7IFwiaWRcIjogXCJkYXRhVHlwZVwiLCBcInN0cmluZ1wiOiBcImRhdGVcIiwgXCJsaXN0XCI6IFtdIH1dLCBcInVwZGF0ZWRcIjogW10sIFwiY3JlYXRlZFwiOiBcIjIwMTYtMDktMDFUMTc6NDc6NDMuMTc5WlwiIH0pO1xuICAgICAgICAvLyAgICAgLy9lc3F1LnJlbW92ZURhdGFPbmx5KCk7XG4gICAgICAgIC8vICAgICAvL2RiLnNhdmVEYXRhYmFzZSgpO1xuICAgICAgICAvLyAgICAgLy8gaWYgKCFlc3F1KSB7XG4gICAgICAgIC8vICAgICAvLyAgICAgZXNxdSA9IGRiLmFkZENvbGxlY3Rpb24oJ3NjaGVtYScpO1xuICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAvLyAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBzY2htcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgLy8gICAgIGVzcXUuaW5zZXJ0KHNjaG1zLml0ZW1zW2ldKTtcbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gICAgIC8vIGRiLnNhdmVEYXRhYmFzZSgpO1xuXG4gICAgICAgIC8vICAgICAvL2xldCBlc3BhbGRlcmEgPSBkYi5nZXRDb2xsZWN0aW9uKCdlc3BhbGRlcmEnKTtcbiAgICAgICAgLy8gICAgIC8vIGlmICghZXNwYWxkZXJhKSB7XG4gICAgICAgIC8vICAgICAvLyAgICAgZXNwYWxkZXJhID0gZGIuYWRkQ29sbGVjdGlvbignZXNwYWxkZXJhJyk7XG4gICAgICAgIC8vICAgICAvLyB9XG4gICAgICAgIC8vICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IGU1Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAvLyAgICAgZXNwYWxkZXJhLmluc2VydChlNS5pdGVtc1tpXSk7XG4gICAgICAgIC8vICAgICAvLyB9XG4gICAgICAgIC8vICAgICAvLyBkYi5zYXZlRGF0YWJhc2UoKVxuXG4gICAgICAgIC8vICAgICBsZXQgdyA9IGRiLmdldENvbGxlY3Rpb24oJ2VzcGFsZGVyYScpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkody5maW5kT25lKCkpKVxuXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGRiLmxvYWREYXRhYmFzZSh7fSwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IHcgPSBkYi5nZXRDb2xsZWN0aW9uKCdlc3BhbGRlcmEnKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHcuZmluZE9uZSgpKSlcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy9sZXQgdyA9IGRiLmdldENvbGxlY3Rpb24oJ2VzcGFsZGVyYScpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHcuZmluZE9uZSgpKSlcblxuICAgICAgICAvLyBsZXQgZXNwYWxkZXJhID0gZGIuYWRkQ29sbGVjdGlvbignZXNwYWxkZXJhJyk7XG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgZTUuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGVzcGFsZGVyYS5pbnNlcnQoZTUuaXRlbXNbaV0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGRiLnNhdmVEYXRhYmFzZSgpO1xuXG4gICAgICAgIC8vIGRiLmxvYWREYXRhYmFzZSh7fSwgKCk9PntcbiAgICAgICAgLy8gICAgIGxldCB3ID0gZGIuZ2V0Q29sbGVjdGlvbignZXNwYWxkZXJhJyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSggdy5maW5kT25lKCkgKSlcblxuICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgIC8vY29uc3Qgc2NoZW1hcyA9IG5ldyBDb2xsZWN0aW9uKCdzY2hlbWFzJyk7XG4gICAgICAgIC8vY29uc3QgY29sbCA9IG5ldyBDb2xsZWN0aW9uKCdlc3BhbGRlcmEnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY2htLmZpbmQoe30pLm1hcCh4ID0+IHguX2lkKSlcblxuICAgICAgICAvLyBzY2hlbWFzLmRiLmxvYWREYXRhYmFzZSh7fSwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3Qgc2NobSA9IHNjaGVtYXMuZGIuZ2V0Q29sbGVjdGlvbignc2NoZW1hcycpXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzY2htLmZpbmQoe30pLm1hcCh4ID0+IHguX2lkKSlcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyBzY2hlbWFzLl9sb2FkRGF0YWJhc2UoKS50aGVuKGRiID0+e1xuICAgICAgICAvLyAgICAgY29uc3QgcyA9IGRiLmdldENvbGxlY3Rpb24oJ3NjaGVtYXMnKVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocy5maW5kKHt9KS5tYXAoeD0+eC5faWQpKVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAoIGFzeW5jICgpPT57XG4gICAgICAgIC8vICAgICBjb25zdCBzOmFueSA9IGF3YWl0IHNjaGVtYXMuX2xvYWREYXRhYmFzZSgpO1xuICAgICAgICAvLyAgICAgY29uc3QgcCA9IHMuZ2V0Q29sbGVjdGlvbignc2NoZW1hcycpXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwLmZpbmQoe30pLm1hcCh4PT54Ll9pZCkpXG4gICAgICAgIC8vIH0gKSgpXG5cbiAgICAgICAgLy9jb25zdCBwID0gc2NoZW1hcy5sZCgpLmdldENvbGxlY3Rpb24oJ3NjaGVtYXMnKVxuICAgICAgICAvL2NvbnNvbGUubG9nKHAuZmluZCh7fSkubWFwKHg9PnguX2lkKSlcblxuICAgICAgICAvL2NvbnN0IGNvbGwgPSBuZXcgQ29sbGVjdGlvbignZXNwYWxkZXJhJyk7XG4gICAgICAgIC8vc2NoZW1hcy5yZW1vdmVDb2xsZWN0aW9uKCk7XG4gICAgICAgIC8vc2NoZW1hcy5sb2FkRGF0YShzY2htcy5pdGVtcyk7XG5cbiAgICAgICAgLy8gQ29sbGVjdGlvbi5zZXRDb2xsZWN0aW9uKCdzY2hlbWFzJywgc2NobXMuaXRlbXMgKTtcbiAgICAgICAgLy8gQ29sbGVjdGlvbi5zZXRDb2xsZWN0aW9uKCdlc3BhbGRlcmEnLCBlNS5pdGVtcyApO1xuXG5cbiAgICAgICAgLy9jb25zdCBjb2xsZWN0aW9uID0gZGIuZ2V0Q29sbGVjdGlvbignZXNwYWxkZXJhJyk7XG5cblxuICAgICAgICAvL3NjaGVtYXMuZmluZE9uZSgpLnRoZW4oeCA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4KSkpO1xuICAgICAgICAvL2NvbGwuZmluZE9uZSgpLnRoZW4oeCA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4KSkpO1xuXG4gICAgICAgIC8vY29sbC5yZW1vdmVDb2xsZWN0aW9uKClcbiAgICAgICAgLy9jb2xsLmxvYWREYXRhKGU1Lml0ZW1zKTtcblxuICAgICAgICAvLyBjb25zdCBjb250cm9sbGVyID0gbmV3IFJlY29yZENvbnRyb2xsZXIoJ2VzcGFsZGVyYScpO1xuICAgICAgICAvLyBjb250cm9sbGVyLmdldFJlY29yZCgnNTdhOGQ4ZGZlZjQ0OTYxMzc3NTI2ZGZkJylcbiAgICAgICAgLy8gICAgIC50aGVuKHggPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeCkpKTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKCdncmVlbicpO1xuICAgICAgICB0aGlzLnBhZ2Uub24oUGFnZS5sb2FkZWRFdmVudCwgKGRhdGE6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25hdmVnYW5kbyBlbiBsb2dpbicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBuYW1lOiBcIkFwcGxlc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgbmFtZTogXCJPcmFuZ2VzXCIgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2V2YWx1YWNpb25lc1wiXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxuXG4gICAgZ290VG8odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgdmFsdWVdKTtcbiAgICB9XG5cbiAgICBsb2FkRXNwYWxkZXJhKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EQi5zZXRDb2xsZWN0aW9uKCdlc3BhbGRlcmEnLCBlNS5pdGVtcykudGhlbih4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICB9XG5cbiAgICBsb2FkU2NoZW1hKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EQi5zZXRDb2xsZWN0aW9uKCdzY2hlbWEnLCBzY2htcy5pdGVtcykudGhlbih4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICB9XG5cbiAgICBzaG93U2NoZW1hKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EQi5nZXRDb2xsZWN0aW9uKCdzY2hlbWEnKVxuICAgICAgICAgICAgLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgICAgICBkYi5maW5kT25lKClcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93UGxhbnRhKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EQi5nZXRDb2xsZWN0aW9uKCdlc3BhbGRlcmEnKVxuICAgICAgICAgICAgLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgICAgICBkYi5maW5kT25lKClcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgcmVtb3ZlU2NoZW1hKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EQi5yZW1vdmVDb2xsZWN0aW9uKCdzY2hlbWEnKS50aGVuKHggPT4gY29uc29sZS5sb2coeCkpXG4gICAgfVxuXG4gICAgcmVtb3ZlUGxhbnRhKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EQi5yZW1vdmVDb2xsZWN0aW9uKCdlc3BhbGRlcmEnKS50aGVuKHggPT4gY29uc29sZS5sb2coeCkpXG4gICAgfVxuXG4gICAgaW5zZXJ0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgLy90aGlzLmRiLmluc2VydCh2YWx1ZSwgKGVyciwgbmV3RG9jKSA9PiB7IGNvbnNvbGUubG9nKG5ld0RvYykgfSlcbiAgICAgICAgLy9cbiAgICB9XG5cbn1cbiJdfQ==
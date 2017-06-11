"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var services_1 = require("../../shared/services");
var EvaluacionesComponent = (function () {
    function EvaluacionesComponent(router, aRoute, rowHolder, page) {
        this.router = router;
        this.aRoute = aRoute;
        this.rowHolder = rowHolder;
        this.page = page;
    }
    EvaluacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (x) {
            //console.log(JSON.stringify(x))
            _this.index = parseInt(x.index);
        });
    };
    EvaluacionesComponent.prototype.goBack = function () {
        //alert('Go Back')
        this.rowHolder.tabIndex.next(0);
        this.router.navigate(["/plantList", { index: this.index }]);
    };
    return EvaluacionesComponent;
}());
EvaluacionesComponent = __decorate([
    core_1.Component({
        selector: "evaluaciones-comp",
        templateUrl: "pages/evaluaciones/evaluaciones.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        services_1.RowHolder,
        page_1.Page])
], EvaluacionesComponent);
exports.EvaluacionesComponent = EvaluacionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbHVhY2lvbmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2YWx1YWNpb25lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELGdDQUErQjtBQUMvQixrREFBa0Q7QUFPbEQsSUFBYSxxQkFBcUI7SUFFOUIsK0JBQ1ksTUFBYyxFQUNkLE1BQXNCLEVBQ3RCLFNBQW9CLEVBQ3BCLElBQVU7UUFIVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ2xCLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzFCLGdDQUFnQztZQUNoQyxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNJLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUsc0NBQXNDO0tBRXRELENBQUM7cUNBSXNCLGVBQU07UUFDTix1QkFBYztRQUNYLG9CQUFTO1FBQ2QsV0FBSTtHQU5iLHFCQUFxQixDQXFCakM7QUFyQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBSb3dIb2xkZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJldmFsdWFjaW9uZXMtY29tcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2V2YWx1YWNpb25lcy9ldmFsdWFjaW9uZXMuaHRtbFwiLFxuICAgIC8vc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRXZhbHVhY2lvbmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3dIb2xkZXI6IFJvd0hvbGRlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4KSlcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBwYXJzZUludCh4LmluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICAvL2FsZXJ0KCdHbyBCYWNrJylcbiAgICAgICAgdGhpcy5yb3dIb2xkZXIudGFiSW5kZXgubmV4dCgwKVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGxhbnRMaXN0XCIsIHsgaW5kZXg6IHRoaXMuaW5kZXggfV0pO1xuICAgIH1cblxufSJdfQ==
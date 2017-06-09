"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var EvaluacionesComponent = (function () {
    function EvaluacionesComponent(router, aRoute, page) {
        this.router = router;
        this.aRoute = aRoute;
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
        this.router.navigate(["/plantList", { index: this.index }]);
    };
    return EvaluacionesComponent;
}());
EvaluacionesComponent = __decorate([
    core_1.Component({
        selector: "evaluaciones",
        templateUrl: "pages/evaluaciones/evaluaciones.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, page_1.Page])
], EvaluacionesComponent);
exports.EvaluacionesComponent = EvaluacionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbHVhY2lvbmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2YWx1YWNpb25lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELGdDQUErQjtBQU0vQixJQUFhLHFCQUFxQjtJQUU5QiwrQkFBb0IsTUFBYyxFQUFVLE1BQXNCLEVBQVUsSUFBVTtRQUFsRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUUzRix3Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzFCLGdDQUFnQztZQUNoQyxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNJLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTCw0QkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlkscUJBQXFCO0lBTGpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsc0NBQXNDO0tBRXRELENBQUM7cUNBRzhCLGVBQU0sRUFBa0IsdUJBQWMsRUFBZ0IsV0FBSTtHQUY3RSxxQkFBcUIsQ0FlakM7QUFmWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImV2YWx1YWNpb25lc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2V2YWx1YWNpb25lcy9ldmFsdWFjaW9uZXMuaHRtbFwiLFxuICAgIC8vc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRXZhbHVhY2lvbmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYVJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHgpKVxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHBhcnNlSW50KHguaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIC8vYWxlcnQoJ0dvIEJhY2snKVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGxhbnRMaXN0XCIsIHsgaW5kZXg6IHRoaXMuaW5kZXggfV0pO1xuICAgIH1cblxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var record_1 = require("../../shared/record");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var dialog_1 = require("../../shared/dialog");
var services_1 = require("../../shared/services");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var page_1 = require("ui/page");
var PlantRowComponent = (function () {
    function PlantRowComponent(router, modalService, viewContainerRef, rowHolder, page, aRoute) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.rowHolder = rowHolder;
        this.page = page;
        this.aRoute = aRoute;
        this.controller = new record_1.RecordController();
        // var listview: RadListView = <RadListView>page.getViewById("rdid");
        // console.log(listview);
        //listview.scrollToIndex(10);
        this.page.on('loaded', function () {
            console.log('onPageLoad');
            _this.krap();
        });
    }
    PlantRowComponent.prototype.onPTap = function (i) {
        console.log('onPTap', i);
        if (!i)
            return;
        this.listViewComponent.listView.scrollToIndex(i);
    };
    PlantRowComponent.prototype.krap = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (x) {
            console.log(' this.aRoute.params.subscribe');
            try {
                //console.log('trying', x.index)
                console.log(typeof x.index);
                _this.index = parseInt(x.index);
                console.log(typeof _this.index);
                _this.onPTap(_this.index);
                // const index = parseInt(x.index);
                // console.log(x.index);
                // console.log(JSON.stringify(x))
                // if (index) {
                //     this.onPTap(index);
                // }
            }
            catch (e) {
                console.log('no se pudo parsear el index');
            }
        });
    };
    PlantRowComponent.prototype.onPageLoaded = function () {
        console.log("onPageLoaded");
    };
    PlantRowComponent.prototype.goToIndex = function () {
        this.onPTap(this.index);
    };
    PlantRowComponent.prototype.onItemLoading = function ($event) {
        console.log('loading event', Object.keys($event));
    };
    PlantRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rowHolder.row.subscribe(function (s) {
            if (s.length === 0) {
                _this.controller.getRow(5, 10)
                    .then(function (x) { return x.sort(function (a, b) { return a.position - b.position; }); })
                    .then(function (p) { return _this.rowHolder.row.next(p); });
            }
        });
        this.krap();
    };
    PlantRowComponent.prototype.onItemTap = function ($event) {
        console.log($event.index);
        //this.show(true, id);
    };
    PlantRowComponent.prototype.onTap = function (id, index) {
        console.log(index);
        //alert(id)
        //this.gotTo('evaluaciones')
        //this.onPTap();
        //this.show(true, id, index);
        this.gotTo('evaluaciones', index);
    };
    PlantRowComponent.prototype.gotTo = function (value, index) {
        this.router.navigate(['/' + value, { index: index }]);
    };
    PlantRowComponent.prototype.onItemPress = function ($event) {
        alert($event.index);
    };
    PlantRowComponent.prototype.show = function (fullscreen, id, index) {
        var options = {
            context: { plant: id, index: index },
            fullscreen: fullscreen,
            viewContainerRef: this.viewContainerRef
        };
        this.modalService
            .showModal(dialog_1.DialogContent, options)
            .then(function (dialogResult) {
            //this.onPTap(dialogResult.index);
        });
    };
    return PlantRowComponent;
}());
__decorate([
    core_1.ViewChild('rdid'),
    __metadata("design:type", angular_1.RadListViewComponent)
], PlantRowComponent.prototype, "listViewComponent", void 0);
PlantRowComponent = __decorate([
    core_1.Component({
        selector: "plant-row",
        templateUrl: "pages/plantRow/list.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        services_1.RowHolder,
        page_1.Page,
        router_1.ActivatedRoute])
], PlantRowComponent);
exports.PlantRowComponent = PlantRowComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxSztBQUNySywwQ0FBeUQ7QUFDekQsOENBQThEO0FBRzlELGtFQUEyRjtBQUUzRiw4Q0FBb0Q7QUFDcEQsa0RBQWtEO0FBSWxELG9FQUErRjtBQUUvRixnQ0FBK0I7QUFPL0IsSUFBYSxpQkFBaUI7SUFNMUIsMkJBQ1ksTUFBYyxFQUNkLFlBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxTQUFvQixFQUNwQixJQUFVLEVBQ1YsTUFBc0I7UUFObEMsaUJBZ0JDO1FBZlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRTlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx5QkFBZ0IsRUFBRSxDQUFDO1FBQ3pDLHFFQUFxRTtRQUNyRSx5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUtNLGtDQUFNLEdBQWIsVUFBYyxDQUFTO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxD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RSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVNLGdDQUFJLEdBQVgsVUFBWSxVQUFtQixFQUFFLEVBQVUsRUFBRSxLQUFhO1FBQ3RELElBQUksT0FBTyxHQUF1QjtZQUM5QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFO1lBQzdCLFVBQVUsWUFBQTtZQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZO2FBQ1osU0FBUyxDQUFDLHNCQUFhLEVBQUUsT0FBTyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFDLFlBQWlCO1lBQ3BCLGtDQUFrQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFvQkwsd0JBQUM7QUFBRCxDQUFDLEFBcklELElBcUlDO0FBNUdzQjtJQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQzs4QkFBb0IsOEJBQW9COzREQUFDO0FBekJsRCxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7S0FFMUMsQ0FBQztxQ0FRc0IsZUFBTTtRQUNBLGlDQUFrQjtRQUNkLHVCQUFnQjtRQUN2QixvQkFBUztRQUNkLFdBQUk7UUFDRix1QkFBYztHQVp6QixpQkFBaUIsQ0FxSTdCO0FBcklZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlY29yZENvbnRyb2xsZXIsIFBsYW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlY29yZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IGFsZXJ0IGFzIEFsZXJ0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgRGlhbG9nQ29udGVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaWFsb2cnO1xuaW1wb3J0IHsgUm93SG9sZGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuXG5pbXBvcnQgeyBSYWRMaXN0VmlldywgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50LCBJdGVtRXZlbnRBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBsYW50LXJvd1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3BsYW50Um93L2xpc3QuaHRtbFwiLFxuICAgIC8vc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbnRSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBSZWNvcmRDb250cm9sbGVyO1xuICAgIHB1YmxpYyBteUl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8UGxhbnRbXT47XG4gICAgcHVibGljIHJlc3VsdDogc3RyaW5nO1xuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3dIb2xkZXI6IFJvd0hvbGRlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGFSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IFJlY29yZENvbnRyb2xsZXIoKTtcbiAgICAgICAgLy8gdmFyIGxpc3R2aWV3OiBSYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz5wYWdlLmdldFZpZXdCeUlkKFwicmRpZFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdHZpZXcpO1xuICAgICAgICAvL2xpc3R2aWV3LnNjcm9sbFRvSW5kZXgoMTApO1xuICAgICAgICB0aGlzLnBhZ2Uub24oJ2xvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblBhZ2VMb2FkJylcbiAgICAgICAgICAgIHRoaXMua3JhcCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBAVmlld0NoaWxkKCdyZGlkJykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgcHVibGljIG9uUFRhcChpOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uUFRhcCcsIGkpXG4gICAgICAgIGlmICghaSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgoaSk7XG4gICAgfVxuXG4gICAga3JhcCgpIHtcbiAgICAgICAgdGhpcy5hUm91dGUucGFyYW1zLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdGhpcy5hUm91dGUucGFyYW1zLnN1YnNjcmliZScpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RyeWluZycsIHguaW5kZXgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHguaW5kZXgpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IHBhcnNlSW50KHguaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmluZGV4KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vblBUYXAodGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgaW5kZXggPSBwYXJzZUludCh4LmluZGV4KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4LmluZGV4KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4KSlcbiAgICAgICAgICAgICAgICAvLyBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5vblBUYXAoaW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc2UgcHVkbyBwYXJzZWFyIGVsIGluZGV4JylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uUGFnZUxvYWRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvblBhZ2VMb2FkZWRcIik7XG4gICAgfVxuXG4gICAgZ29Ub0luZGV4KCkge1xuICAgICAgICB0aGlzLm9uUFRhcCh0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgb25JdGVtTG9hZGluZygkZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgZXZlbnQnLCBPYmplY3Qua2V5cygkZXZlbnQpKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvd0hvbGRlci5yb3cuc3Vic2NyaWJlKHMgPT4ge1xuICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFJvdyg1LCAxMClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oeCA9PiB4LnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEucG9zaXRpb24gLSBiLnBvc2l0aW9uIH0pKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihwID0+IHRoaXMucm93SG9sZGVyLnJvdy5uZXh0KHApKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmtyYXAoKVxuXG4gICAgfVxuXG4gICAgb25JdGVtVGFwKCRldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQuaW5kZXgpO1xuICAgICAgICAvL3RoaXMuc2hvdyh0cnVlLCBpZCk7XG4gICAgfVxuICAgIG9uVGFwKGlkLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIC8vYWxlcnQoaWQpXG4gICAgICAgIC8vdGhpcy5nb3RUbygnZXZhbHVhY2lvbmVzJylcbiAgICAgICAgLy90aGlzLm9uUFRhcCgpO1xuICAgICAgICAvL3RoaXMuc2hvdyh0cnVlLCBpZCwgaW5kZXgpO1xuICAgICAgICB0aGlzLmdvdFRvKCdldmFsdWFjaW9uZXMnLCBpbmRleCk7XG4gICAgfVxuXG4gICAgZ290VG8odmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgdmFsdWUsIHsgaW5kZXggfV0pO1xuICAgIH1cblxuICAgIG9uSXRlbVByZXNzKCRldmVudCkge1xuICAgICAgICBhbGVydCgkZXZlbnQuaW5kZXgpXG4gICAgfVxuXG4gICAgcHVibGljIHNob3coZnVsbHNjcmVlbjogYm9vbGVhbiwgaWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBwbGFudDogaWQsIGluZGV4IH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2VcbiAgICAgICAgICAgIC5zaG93TW9kYWwoRGlhbG9nQ29udGVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChkaWFsb2dSZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5vblBUYXAoZGlhbG9nUmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcHVibGljIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZChhcmdzKSB7XG4gICAgLy8gICAgIHZhciB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XG4gICAgLy8gICAgIHRpbWVyTW9kdWxlLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgdmFyIGluaXRpYWxOdW1iZXJPZkl0ZW1zID0gdGhhdC5nZXQoKS5fbnVtYmVyT2ZBZGRlZEl0ZW1zO1xuICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtczsgaSA8IGluaXRpYWxOdW1iZXJPZkl0ZW1zICsgMjsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGkgPiBwb3N0cy5uYW1lcy5sZW5ndGggLSAxKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB2YXIgaW1hZ2VVcmkgPSBBcHBsaWNhdGlvbi5hbmRyb2lkID8gcG9zdHMuaW1hZ2VzW2ldLnRvTG93ZXJDYXNlKCkgOiBwb3N0cy5pbWFnZXNbaV07XG5cbiAgICAvLyAgICAgICAgICAgICB0aGF0LmdldCgpLl9kYXRhSXRlbXMuc3BsaWNlKDAsIDAsIG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgaW1hZ2VVcmkpKTtcbiAgICAvLyAgICAgICAgICAgICB0aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXMrKztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHZhciBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIC8vICAgICAgICAgbGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgLy8gICAgIH0sIDEwMDApO1xuICAgIC8vIH1cblxufSJdfQ==
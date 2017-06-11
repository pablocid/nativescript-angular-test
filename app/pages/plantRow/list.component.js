"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var dialog_1 = require("../../shared/dialog");
var services_1 = require("../../shared/services");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var page_1 = require("ui/page");
var tab_view_1 = require("ui/tab-view");
var PlantRowComponent = (function () {
    function PlantRowComponent(router, modalService, viewContainerRef, rowHolder, page, aRoute) {
        this.router = router;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.rowHolder = rowHolder;
        this.page = page;
        this.aRoute = aRoute;
    }
    PlantRowComponent.prototype.onPTap = function (i) {
        console.log('onPTap', i);
        if (!i)
            return;
        this.listViewComponent.listView.scrollToIndex(i);
    };
    // public onIndexChanged(args) {
    //     let tabView = <TabView>args.object;
    //     console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    // }
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
        console.log('NG ON INIT');
        //this.tab = <TabView>this.page.getViewById('tabEvaluation');
        // this.controller = new RecordController();
        // console.log('isEmpty', this.rowHolder.row.)
        // this.rowHolder.row.subscribe(s => {
        //     console.log('rowHolderSubscribe')
        //     if (s.length === 0) {
        //         this.controller.getRow(5, 10)
        //             .then(x => x.sort((a, b) => { return a.position - b.position }))
        //             .then(p => this.rowHolder.row.next(p))
        //     }
        // });
        this.rowHolder.tabIndex.subscribe(function (z) {
            console.log('tabIndex', z);
        });
        // this.aRoute.paramMap.subscribe(x => {
        //     console.log('paramMap');
        //     console.log(x.get('index'))
        //     console.log('close paramMap');
        // })
        // this.aRoute.params.subscribe(x => {
        //     console.log(' this.aRoute.params.subscribe')
        //     this.tab.selectedIndex = 0;
        //     try {
        //     } catch (e) {
        //         console.log('no se pudo parsear el index')
        //     }
        // })
        // this.rowHolder.tabIndex.subscribe(z =>{
        //     this.tab.selectedIndex = z;
        // })
        this.page.on('loaded', function () {
            console.log('onPageLoad');
        });
    };
    PlantRowComponent.prototype.onItemTap = function ($event) {
        console.log($event.index);
        //this.show(true, id);
    };
    PlantRowComponent.prototype.onTap = function (id, index) {
        console.log(index);
        this.rowHolder.tabIndex.next(3);
        this.router.navigate(['/plantList/evaluaciones', { index: index }]);
    };
    PlantRowComponent.prototype.gotTo = function (value, index) {
        this.router.navigate([value, { index: index }]);
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
            .showModal(dialog_1.DialogContent, options);
    };
    return PlantRowComponent;
}());
__decorate([
    core_1.ViewChild('rdid'),
    __metadata("design:type", angular_1.RadListViewComponent)
], PlantRowComponent.prototype, "listViewComponent", void 0);
__decorate([
    core_1.ViewChild('tabEvaluation'),
    __metadata("design:type", tab_view_1.TabView)
], PlantRowComponent.prototype, "tabHash", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxSztBQUNySywwQ0FBeUQ7QUFJekQsa0VBQTJGO0FBRTNGLDhDQUFvRDtBQUNwRCxrREFBa0Q7QUFJbEQsb0VBQStGO0FBRS9GLGdDQUErQjtBQUMvQix3Q0FBa0Y7QUFNbEYsSUFBYSxpQkFBaUI7SUFXMUIsMkJBQ1ksTUFBYyxFQUNkLFlBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxTQUFvQixFQUNwQixJQUFVLEVBQ1YsTUFBc0I7UUFMdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWdCO0lBRWxDLENBQUM7SUFHTSxrQ0FBTSxHQUFiLFVBQWMsQ0FBUztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsMENBQTBDO0lBQzFDLGtGQUFrRjtJQUNsRixJQUFJO0lBRUosd0NBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE1B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V0FBSTtRQUNGLHVCQUFjO0dBakJ6QixpQkFBaUIsQ0F5SDdCO0FBekhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlY29yZENvbnRyb2xsZXIsIFBsYW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlY29yZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IGFsZXJ0IGFzIEFsZXJ0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgRGlhbG9nQ29udGVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaWFsb2cnO1xuaW1wb3J0IHsgUm93SG9sZGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuXG5pbXBvcnQgeyBSYWRMaXN0VmlldywgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50LCBJdGVtRXZlbnRBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBsYW50LXJvd1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3BsYW50Um93L2xpc3QuaHRtbFwiLFxuICAgIC8vc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbnRSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBSZWNvcmRDb250cm9sbGVyO1xuICAgIHB1YmxpYyBteUl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8UGxhbnRbXT47XG4gICAgcHVibGljIHJlc3VsdDogc3RyaW5nO1xuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJJbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWI6IFRhYlZpZXc7XG5cbiAgICBAVmlld0NoaWxkKCdyZGlkJykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoJ3RhYkV2YWx1YXRpb24nKSB0YWJIYXNoOiBUYWJWaWV3O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3dIb2xkZXI6IFJvd0hvbGRlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGFSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBvblBUYXAoaTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblBUYXAnLCBpKVxuICAgICAgICBpZiAoIWkpIHJldHVybjtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5zY3JvbGxUb0luZGV4KGkpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBvbkluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgLy8gICAgIGxldCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaW5kZXggY2hhbmdlZCEgTmV3IGlueGVkOiBcIiArIHRhYlZpZXcuc2VsZWN0ZWRJbmRleCk7XG4gICAgLy8gfVxuXG4gICAgb25QYWdlTG9hZGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uUGFnZUxvYWRlZFwiKTtcbiAgICB9XG5cbiAgICBnb1RvSW5kZXgoKSB7XG4gICAgICAgIHRoaXMub25QVGFwKHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIG9uSXRlbUxvYWRpbmcoJGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGV2ZW50JywgT2JqZWN0LmtleXMoJGV2ZW50KSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05HIE9OIElOSVQnKVxuICAgICAgICAvL3RoaXMudGFiID0gPFRhYlZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkKCd0YWJFdmFsdWF0aW9uJyk7XG4gICAgICAgIC8vIHRoaXMuY29udHJvbGxlciA9IG5ldyBSZWNvcmRDb250cm9sbGVyKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzRW1wdHknLCB0aGlzLnJvd0hvbGRlci5yb3cuKVxuICAgICAgICAvLyB0aGlzLnJvd0hvbGRlci5yb3cuc3Vic2NyaWJlKHMgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jvd0hvbGRlclN1YnNjcmliZScpXG4gICAgICAgIC8vICAgICBpZiAocy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0Um93KDUsIDEwKVxuICAgICAgICAvLyAgICAgICAgICAgICAudGhlbih4ID0+IHguc29ydCgoYSwgYikgPT4geyByZXR1cm4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24gfSkpXG4gICAgICAgIC8vICAgICAgICAgICAgIC50aGVuKHAgPT4gdGhpcy5yb3dIb2xkZXIucm93Lm5leHQocCkpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHRoaXMucm93SG9sZGVyLnRhYkluZGV4LnN1YnNjcmliZSh6ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YWJJbmRleCcsIHopXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gdGhpcy5hUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3BhcmFtTWFwJyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh4LmdldCgnaW5kZXgnKSlcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjbG9zZSBwYXJhbU1hcCcpO1xuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIHRoaXMuYVJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnIHRoaXMuYVJvdXRlLnBhcmFtcy5zdWJzY3JpYmUnKVxuICAgICAgICAvLyAgICAgdGhpcy50YWIuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIC8vICAgICB0cnkge1xuXG4gICAgICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ25vIHNlIHB1ZG8gcGFyc2VhciBlbCBpbmRleCcpXG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyB0aGlzLnJvd0hvbGRlci50YWJJbmRleC5zdWJzY3JpYmUoeiA9PntcbiAgICAgICAgLy8gICAgIHRoaXMudGFiLnNlbGVjdGVkSW5kZXggPSB6O1xuICAgICAgICAvLyB9KVxuXG5cbiAgICAgICAgdGhpcy5wYWdlLm9uKCdsb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25QYWdlTG9hZCcpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoJGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC5pbmRleCk7XG4gICAgICAgIC8vdGhpcy5zaG93KHRydWUsIGlkKTtcbiAgICB9XG4gICAgb25UYXAoaWQsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgdGhpcy5yb3dIb2xkZXIudGFiSW5kZXgubmV4dCgzKVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wbGFudExpc3QvZXZhbHVhY2lvbmVzJywgeyBpbmRleCB9XSk7XG4gICAgfVxuXG4gICAgZ290VG8odmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdmFsdWUsIHsgaW5kZXggfV0pO1xuICAgIH1cblxuICAgIG9uSXRlbVByZXNzKCRldmVudCkge1xuICAgICAgICBhbGVydCgkZXZlbnQuaW5kZXgpXG4gICAgfVxuXG4gICAgcHVibGljIHNob3coZnVsbHNjcmVlbjogYm9vbGVhbiwgaWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBwbGFudDogaWQsIGluZGV4IH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2VcbiAgICAgICAgICAgIC5zaG93TW9kYWwoRGlhbG9nQ29udGVudCwgb3B0aW9ucyk7XG4gICAgfVxuXG59Il19
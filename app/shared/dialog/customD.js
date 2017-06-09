"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var dialogContent_1 = require("./dialogContent");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var CustomDialogTest = (function () {
    function CustomDialogTest(modalService, viewContainerRef, route, page) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.route = route;
        this.page = page;
        console.log('custom');
        this.page.on('loaded', function () {
            console.log('onPageLoad');
        });
    }
    CustomDialogTest.prototype.ngAfterViewInit = function () {
    };
    CustomDialogTest.prototype.show = function (fullscreen) {
        var _this = this;
        var options = {
            context: { promptMsg: "This is the prompt message!" },
            fullscreen: fullscreen,
            viewContainerRef: this.viewContainerRef
        };
        this.modalService
            .showModal(dialogContent_1.DialogContent, options)
            .then(function (dialogResult) { return _this.result = dialogResult; });
    };
    CustomDialogTest.prototype.pList = function () {
        this.route.navigate(['/plantList']);
    };
    return CustomDialogTest;
}());
CustomDialogTest = __decorate([
    core_1.Component({
        template: "\n        <StackLayout>\n            <Button text=\"show\" (tap)=\"show()\"></Button>\n            <Label [text]=\"'RESULT: ' + result\"></Label>\n            <Button text=\"Go to Plant list\" (tap)=\"pList()\"></Button>\n        </StackLayout>\n    "
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        router_1.Router,
        page_1.Page])
], CustomDialogTest);
exports.CustomDialogTest = CustomDialogTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0Usa0VBQTJGO0FBQzNGLGlEQUFnRDtBQUNoRCwwQ0FBeUQ7QUFDekQsZ0NBQStCO0FBVy9CLElBQWEsZ0JBQWdCO0lBR3pCLDBCQUNZLFlBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxLQUFhLEVBQ2IsSUFBUztRQUhULGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMENBQWUsR0FBZjtJQUVBLENBQUM7SUFDTSwrQkFBSSxHQUFYLFVBQVksVUFBbUI7UUFBL0IsaUJBVUM7UUFURyxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLDZCQUE2QixFQUFFO1lBQ3JELFVBQVUsWUFBQTtZQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZO2FBQ1osU0FBUyxDQUFDLDZCQUFhLEVBQUUsT0FBTyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFDLFlBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksZ0JBQWdCO0lBVDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsNFBBTVQ7S0FDSixDQUFDO3FDQUs0QixpQ0FBa0I7UUFDZCx1QkFBZ0I7UUFDM0IsZUFBTTtRQUNSLFdBQUk7R0FQWixnQkFBZ0IsQ0FpQzVCO0FBakNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERpYWxvZ0NvbnRlbnQgfSBmcm9tICcuL2RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cInNob3dcIiAodGFwKT1cInNob3coKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIidSRVNVTFQ6ICcgKyByZXN1bHRcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiR28gdG8gUGxhbnQgbGlzdFwiICh0YXApPVwicExpc3QoKVwiPjwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRGlhbG9nVGVzdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIHB1YmxpYyByZXN1bHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdlOlBhZ2VcbiAgICApIHsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b20nKVxuICAgICAgICB0aGlzLnBhZ2Uub24oJ2xvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblBhZ2VMb2FkJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICB9XG4gICAgcHVibGljIHNob3coZnVsbHNjcmVlbjogYm9vbGVhbikge1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBwcm9tcHRNc2c6IFwiVGhpcyBpcyB0aGUgcHJvbXB0IG1lc3NhZ2UhXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW4sXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZVxuICAgICAgICAgICAgLnNob3dNb2RhbChEaWFsb2dDb250ZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKGRpYWxvZ1Jlc3VsdDogc3RyaW5nKSA9PiB0aGlzLnJlc3VsdCA9IGRpYWxvZ1Jlc3VsdClcbiAgICB9XG5cbiAgICBwTGlzdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbJy9wbGFudExpc3QnXSlcbiAgICB9XG59Il19
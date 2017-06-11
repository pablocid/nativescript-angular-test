"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var dialogContent_1 = require("./dialogContent");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var record_1 = require("../../shared/record");
var services_1 = require("../../shared/services");
var CustomDialogTest = (function () {
    function CustomDialogTest(modalService, viewContainerRef, route, rowHolder, page) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.route = route;
        this.rowHolder = rowHolder;
        this.page = page;
        console.log('custom');
        this.page.on('loaded', function () {
            console.log('onPageLoad');
        });
    }
    CustomDialogTest.prototype.ngOnInit = function () {
        var _this = this;
        this.controller = new record_1.RecordController();
        this.controller.getRow(5, 10)
            .then(function (x) { return x.sort(function (a, b) { return a.position - b.position; }); })
            .then(function (p) { return _this.rowHolder.row.next(p); });
    };
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
        services_1.RowHolder,
        page_1.Page])
], CustomDialogTest);
exports.CustomDialogTest = CustomDialogTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsa0VBQTJGO0FBQzNGLGlEQUFnRDtBQUNoRCwwQ0FBeUQ7QUFDekQsZ0NBQStCO0FBQy9CLDhDQUE4RDtBQUM5RCxrREFBa0Q7QUFXbEQsSUFBYSxnQkFBZ0I7SUFJekIsMEJBQ1ksWUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLEtBQWEsRUFDYixTQUFvQixFQUNwQixJQUFVO1FBSlYsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx5QkFBZ0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDeEIsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDO2FBQy9ELElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFFRCwwQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUNNLCtCQUFJLEdBQVgsVUFBWSxVQUFtQjtRQUEvQixpQkFVQztRQVRHLElBQUksT0FBTyxHQUF1QjtZQUM5QixPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkJBQTZCLEVBQUU7WUFDckQsVUFBVSxZQUFBO1lBQ1YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVk7YUFDWixTQUFTLENBQUMsNkJBQWEsRUFBRSxPQUFPLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUMsWUFBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxFQUExQixDQUEwQixDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSxnQkFBZ0I7SUFUNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw0UEFNVDtLQUNKLENBQUM7cUNBTTRCLGlDQUFrQjtRQUNkLHVCQUFnQjtRQUMzQixlQUFNO1FBQ0Ysb0JBQVM7UUFDZCxXQUFJO0dBVGIsZ0JBQWdCLENBMEM1QjtBQTFDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERpYWxvZ0NvbnRlbnQgfSBmcm9tICcuL2RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBSZWNvcmRDb250cm9sbGVyLCBQbGFudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWNvcmQnO1xuaW1wb3J0IHsgUm93SG9sZGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwic2hvd1wiICh0YXApPVwic2hvdygpXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiJ1JFU1VMVDogJyArIHJlc3VsdFwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJHbyB0byBQbGFudCBsaXN0XCIgKHRhcCk9XCJwTGlzdCgpXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21EaWFsb2dUZXN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBwdWJsaWMgcmVzdWx0OiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnRyb2xsZXI6IFJlY29yZENvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm93SG9sZGVyOiBSb3dIb2xkZXIsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZVxuICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tJylcbiAgICAgICAgdGhpcy5wYWdlLm9uKCdsb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25QYWdlTG9hZCcpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBSZWNvcmRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRSb3coNSwgMTApXG4gICAgICAgICAgICAudGhlbih4ID0+IHguc29ydCgoYSwgYikgPT4geyByZXR1cm4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24gfSkpXG4gICAgICAgICAgICAudGhlbihwID0+IHRoaXMucm93SG9sZGVyLnJvdy5uZXh0KHApKVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgc2hvdyhmdWxsc2NyZWVuOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7IHByb21wdE1zZzogXCJUaGlzIGlzIHRoZSBwcm9tcHQgbWVzc2FnZSFcIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbixcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlXG4gICAgICAgICAgICAuc2hvd01vZGFsKERpYWxvZ0NvbnRlbnQsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigoZGlhbG9nUmVzdWx0OiBzdHJpbmcpID0+IHRoaXMucmVzdWx0ID0gZGlhbG9nUmVzdWx0KVxuICAgIH1cblxuICAgIHBMaXN0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFsnL3BsYW50TGlzdCddKVxuICAgIH1cbn0iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../services");
var lodash_1 = require("lodash");
var DialogContent = DialogContent_1 = (function () {
    function DialogContent(params, rowHolder, modalService, viewContainerRef) {
        this.params = params;
        this.rowHolder = rowHolder;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.firstTx = "";
        this.index = this.params.context.index;
    }
    DialogContent.prototype.ngOnInit = function () {
        var _this = this;
        this.rowHolder.row.subscribe(function (x) {
            _this.plant = lodash_1.find(x, { id: _this.params.context.plant });
        });
    };
    DialogContent.prototype.close = function (result) {
        this.params.closeCallback({ index: this.index });
    };
    DialogContent.prototype.onTextChange = function (args) {
        var textField = args.object;
        this.plant.getAttribute('5807af9231f55d0010aaffe5').value = textField.text;
        this.firstTx = textField.text;
    };
    DialogContent.prototype.onReturn = function (args) {
        var textField = args.object;
        console.log("onReturn");
        this.firstTx = textField.text;
    };
    DialogContent.prototype.show = function (fullscreen, index) {
        var _this = this;
        var options = {
            context: { plant: index },
            fullscreen: fullscreen,
            viewContainerRef: this.viewContainerRef
        };
        this.modalService
            .showModal(DialogContent_1, options)
            .then(function (dialogResult) { return _this.result = dialogResult; });
    };
    return DialogContent;
}());
DialogContent = DialogContent_1 = __decorate([
    core_1.Component({
        selector: "modal-content",
        template: "\n    <StackLayout margin=\"24\" >\n        <Label [text]=\"plant.spot\"></Label>\n        <StackLayout marginTop=\"12\">\n        <TextField (textChange)=\"onTextChange($event)\" (returnPress)=\"onReturn($event)\" > </TextField>\n        <Button text=\"ok\" (tap)=\"close('OK')\"></Button>\n        <Button text=\"cancel\" (tap)=\"close('Cancel')\"></Button>\n        </StackLayout>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
        services_1.RowHolder,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], DialogContent);
exports.DialogContent = DialogContent;
var DialogContent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZ0NvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsa0VBQThHO0FBRzlHLHdDQUF3QztBQUN4QyxpQ0FBc0M7QUFldEMsSUFBYSxhQUFhO0lBS3RCLHVCQUNZLE1BQXlCLEVBQ3pCLFNBQW9CLEVBQ3BCLFlBQWdDLEVBQ2hDLGdCQUFrQztRQUhsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUHZDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFTeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxhQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sNkJBQUssR0FBWixVQUFhLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFBO1FBQzFFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxVQUFtQixFQUFFLEtBQWE7UUFBOUMsaUJBVUM7UUFURyxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN6QixVQUFVLFlBQUE7WUFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWTthQUNaLFNBQVMsQ0FBQyxlQUFhLEVBQUUsT0FBTyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFDLFlBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksYUFBYTtJQWJ6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLHlaQVNYO0tBQ0YsQ0FBQztxQ0FPc0IsZ0NBQWlCO1FBQ2Qsb0JBQVM7UUFDTixpQ0FBa0I7UUFDZCx1QkFBZ0I7R0FUckMsYUFBYSxDQWdEekI7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcywgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gJy4uL3JlY29yZCc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUm93SG9sZGVyIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgZmluZCBhcyBGaW5kIH0gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibW9kYWwtY29udGVudFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IG1hcmdpbj1cIjI0XCIgPlxuICAgICAgICA8TGFiZWwgW3RleHRdPVwicGxhbnQuc3BvdFwiPjwvTGFiZWw+XG4gICAgICAgIDxTdGFja0xheW91dCBtYXJnaW5Ub3A9XCIxMlwiPlxuICAgICAgICA8VGV4dEZpZWxkICh0ZXh0Q2hhbmdlKT1cIm9uVGV4dENoYW5nZSgkZXZlbnQpXCIgKHJldHVyblByZXNzKT1cIm9uUmV0dXJuKCRldmVudClcIiA+IDwvVGV4dEZpZWxkPlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJva1wiICh0YXApPVwiY2xvc2UoJ09LJylcIj48L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiY2FuY2VsXCIgKHRhcCk9XCJjbG9zZSgnQ2FuY2VsJylcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBwbGFudDogUGxhbnQ7XG4gICAgcHVibGljIGZpcnN0VHg6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHJlc3VsdDogc3RyaW5nO1xuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgcm93SG9sZGVyOiBSb3dIb2xkZXIsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5wYXJhbXMuY29udGV4dC5pbmRleDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3dIb2xkZXIucm93LnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxhbnQgPSBGaW5kKHgsIHsgaWQ6IHRoaXMucGFyYW1zLmNvbnRleHQucGxhbnQgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKHJlc3VsdDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBpbmRleDogdGhpcy5pbmRleCB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMucGxhbnQuZ2V0QXR0cmlidXRlKCc1ODA3YWY5MjMxZjU1ZDAwMTBhYWZmZTUnKS52YWx1ZSA9IHRleHRGaWVsZC50ZXh0XG4gICAgICAgIHRoaXMuZmlyc3RUeCA9IHRleHRGaWVsZC50ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJldHVybihhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25SZXR1cm5cIik7XG4gICAgICAgIHRoaXMuZmlyc3RUeCA9IHRleHRGaWVsZC50ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KGZ1bGxzY3JlZW46IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgcGxhbnQ6IGluZGV4IH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2VcbiAgICAgICAgICAgIC5zaG93TW9kYWwoRGlhbG9nQ29udGVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChkaWFsb2dSZXN1bHQ6IHN0cmluZykgPT4gdGhpcy5yZXN1bHQgPSBkaWFsb2dSZXN1bHQpXG4gICAgfVxufVxuIl19
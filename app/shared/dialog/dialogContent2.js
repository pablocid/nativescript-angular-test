"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../services");
var DialogContent2 = (function () {
    function DialogContent2(params, rowHolder) {
        this.params = params;
        this.rowHolder = rowHolder;
        this.firstTx = "";
    }
    DialogContent2.prototype.ngOnInit = function () {
        //this.plant.getAttribute('5807af9231f55d0010aaffe5').value = 99;
    };
    DialogContent2.prototype.close = function (result) {
        this.params.closeCallback(this.plant);
    };
    DialogContent2.prototype.onTextChange = function (args) {
        var textField = args.object;
        this.plant.getAttribute('5807af9231f55d0010aaffe5').value = textField.text;
        this.firstTx = textField.text;
    };
    DialogContent2.prototype.onReturn = function (args) {
        var textField = args.object;
        console.log("onReturn");
        this.firstTx = textField.text;
    };
    return DialogContent2;
}());
DialogContent2 = __decorate([
    core_1.Component({
        selector: "modal-content2",
        template: "\n    <StackLayout margin=\"24\" >\n        <StackLayout marginTop=\"12\">\n        <Button text=\"ok\" (tap)=\"close('OK')\"></Button>\n        <Button text=\"cancel\" (tap)=\"close('Cancel')\"></Button>\n        </StackLayout>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
        services_1.RowHolder])
], DialogContent2);
exports.DialogContent2 = DialogContent2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nQ29udGVudDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2dDb250ZW50Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFHdEUsd0NBQXdDO0FBY3hDLElBQWEsY0FBYztJQUd2Qix3QkFDWSxNQUF5QixFQUN6QixTQUFvQjtRQURwQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBSHpCLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFNNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxpRUFBaUU7SUFDckUsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUE7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGNBQWM7SUFYMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLDhQQU9YO0tBQ0YsQ0FBQztxQ0FLc0IsZ0NBQWlCO1FBQ2Qsb0JBQVM7R0FMdkIsY0FBYyxDQThCMUI7QUE5Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFBsYW50IH0gZnJvbSAnLi4vcmVjb3JkJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBSb3dIb2xkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBmaW5kIGFzIEZpbmQgfSBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJtb2RhbC1jb250ZW50MlwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IG1hcmdpbj1cIjI0XCIgPlxuICAgICAgICA8U3RhY2tMYXlvdXQgbWFyZ2luVG9wPVwiMTJcIj5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwib2tcIiAodGFwKT1cImNsb3NlKCdPSycpXCI+PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cImNhbmNlbFwiICh0YXApPVwiY2xvc2UoJ0NhbmNlbCcpXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250ZW50MiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHBsYW50OiBQbGFudDtcbiAgICBwdWJsaWMgZmlyc3RUeDogc3RyaW5nID0gXCJcIjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgICAgICBwcml2YXRlIHJvd0hvbGRlcjogUm93SG9sZGVyXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy90aGlzLnBsYW50LmdldEF0dHJpYnV0ZSgnNTgwN2FmOTIzMWY1NWQwMDEwYWFmZmU1JykudmFsdWUgPSA5OTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLnBsYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMucGxhbnQuZ2V0QXR0cmlidXRlKCc1ODA3YWY5MjMxZjU1ZDAwMTBhYWZmZTUnKS52YWx1ZSA9IHRleHRGaWVsZC50ZXh0XG4gICAgICAgIHRoaXMuZmlyc3RUeCA9IHRleHRGaWVsZC50ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJldHVybihhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25SZXR1cm5cIik7XG4gICAgICAgIHRoaXMuZmlyc3RUeCA9IHRleHRGaWVsZC50ZXh0O1xuICAgIH1cbn0iXX0=
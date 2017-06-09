"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var RowHolder = (function () {
    function RowHolder() {
        this.row = new BehaviorSubject_1.BehaviorSubject([]);
    }
    return RowHolder;
}());
RowHolder = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RowHolder);
exports.RowHolder = RowHolder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93SG9sZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm93SG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdEQUF1RDtBQUd2RCxJQUFhLFNBQVM7SUFFbEI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTs7R0FDQSxTQUFTLENBTXJCO0FBTlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gJy4uL3JlY29yZCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvd0hvbGRlciB7XG4gICAgcHVibGljIHJvdzogQmVoYXZpb3JTdWJqZWN0PFBsYW50W10+O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdyA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIH1cbiAgICBcbn0iXX0=
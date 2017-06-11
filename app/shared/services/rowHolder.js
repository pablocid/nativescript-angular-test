"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var RowHolder = (function () {
    function RowHolder() {
        this.row = new BehaviorSubject_1.BehaviorSubject([]);
        this.tabIndex = new BehaviorSubject_1.BehaviorSubject(1);
    }
    return RowHolder;
}());
RowHolder = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RowHolder);
exports.RowHolder = RowHolder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93SG9sZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm93SG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdEQUF1RDtBQUd2RCxJQUFhLFNBQVM7SUFHbEI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUNBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTs7R0FDQSxTQUFTLENBU3JCO0FBVFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gJy4uL3JlY29yZCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvd0hvbGRlciB7XG4gICAgcHVibGljIHJvdzogQmVoYXZpb3JTdWJqZWN0PFBsYW50W10+O1xuICAgIHB1YmxpYyB0YWJJbmRleDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm93ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDEpO1xuICAgIH1cblxuXG59Il19
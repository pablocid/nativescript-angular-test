"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updated_1 = require("./updated");
var Base = (function () {
    function Base() {
        this._updated = [];
    }
    Object.defineProperty(Base.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "created", {
        get: function () {
            if (this._created)
                return new Date(this._created);
        },
        set: function (value) {
            this._created = value.toISOString();
        },
        enumerable: true,
        configurable: true
    });
    Base.prototype.setCreateISOString = function (raw) {
        this._created = raw;
    };
    Base.prototype.setUpdated = function (raw) {
        var _this = this;
        if (raw && Array.isArray(raw) && raw.length) {
            raw.forEach(function (x) {
                if (!x.id || !x.date)
                    return;
                _this.update(new updated_1.Updated(x));
            });
        }
    };
    Base.prototype.update = function (value) {
        if (this._updated) {
            this._updated.push(value);
        }
        else {
            this._updated = [];
            this._updated.push(value);
        }
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0M7QUFJcEM7SUFBQTtRQUdjLGFBQVEsR0FBYyxFQUFFLENBQUM7SUF5Q3ZDLENBQUM7SUF0Q0csc0JBQVcsb0JBQUU7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7YUFFRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxDQUFDO2FBRUQsVUFBbUIsS0FBVztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxDQUFDOzs7T0FKQTtJQU1NLGlDQUFrQixHQUF6QixVQUEwQixHQUFXO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixHQUFVO1FBQTVCLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVNLHFCQUFNLEdBQWIsVUFBYyxLQUFjO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRUwsV0FBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGRhdGVkIH0gZnJvbSAnLi91cGRhdGVkJztcbmltcG9ydCB7IFBhcmFtQ2hlY2tlciB9IGZyb20gJy4uL0hlbHBlcnMnO1xuXG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgICBwcm90ZWN0ZWQgX2lkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF9jcmVhdGVkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF91cGRhdGVkOiBVcGRhdGVkW10gPSBbXTtcblxuXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjcmVhdGVkKCk6IERhdGUge1xuICAgICAgICBpZiAodGhpcy5fY3JlYXRlZCkgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX2NyZWF0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3JlYXRlZCh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLl9jcmVhdGVkID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q3JlYXRlSVNPU3RyaW5nKHJhdzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZWQgPSByYXc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVwZGF0ZWQocmF3OiBhbnlbXSkge1xuICAgICAgICBpZiAocmF3ICYmIEFycmF5LmlzQXJyYXkocmF3KSAmJiByYXcubGVuZ3RoKSB7XG4gICAgICAgICAgICByYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXguaWQgfHwgIXguZGF0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKG5ldyBVcGRhdGVkKHgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSh2YWx1ZTogVXBkYXRlZCkge1xuICAgICAgICBpZiAodGhpcy5fdXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlZC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZWQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZWQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=
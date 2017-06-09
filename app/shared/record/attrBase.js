"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttrBase = (function () {
    function AttrBase(attr) {
        this._set(attr);
    }
    AttrBase.prototype._set = function (attr) {
        if (!attr)
            return;
        //this._id = attr.id;
        this._string = attr.string || undefined;
        this._boolean = attr.boolean !== undefined ? attr.boolean : undefined;
        this._date = attr.date || undefined;
        this._number = attr.number || undefined;
        this._reference = attr.reference || undefined;
        this._listOfObj = attr.listOfObj || undefined;
        this._list = attr.list && Array.isArray(attr.list) ? attr.list : undefined;
    };
    Object.defineProperty(AttrBase.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "string", {
        get: function () {
            return this._string;
        },
        set: function (value) {
            this._string = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "boolean", {
        get: function () {
            return this._boolean;
        },
        set: function (value) {
            this._boolean = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "date", {
        get: function () {
            return new Date(this._date);
        },
        set: function (value) {
            this._date = new Date(this._date).toISOString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (value) {
            this._number = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "reference", {
        get: function () {
            return this._reference;
        },
        set: function (value) {
            this._reference = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "listOfObj", {
        get: function () {
            return this._listOfObj;
        },
        set: function (value) {
            this._listOfObj = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "list", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttrBase.prototype, "data", {
        get: function () {
            var data = {};
            data['id'] = this._id;
            if (this._string) {
                data['string'] = this._string;
            }
            if (this._boolean !== undefined) {
                data['boolean'] = this._boolean;
            }
            if (this._date) {
                data['date'] = this._date;
            }
            if (this._number !== undefined) {
                data['number'] = this._number;
            }
            if (this._reference) {
                data['reference'] = this._reference;
            }
            if (this._listOfObj) {
                data['listOfObj'] = this._listOfObj;
            }
            if (this._list) {
                data['list'] = this._list;
            }
            return data;
        },
        enumerable: true,
        configurable: true
    });
    return AttrBase;
}());
exports.AttrBase = AttrBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdHRyQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0lBVUksa0JBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLENBQUM7SUFFTyx1QkFBSSxHQUFaLFVBQWEsSUFBVTtRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNsQixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFFRCxzQkFBVyx3QkFBRTthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzthQUNELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FIQTtJ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QUFJLENBQUMsVUFBVSxDQUFDO1lBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFDLENBQUM7WUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUNMLGVBQUM7QUFBRCxDQUFDLEFBakdELElBaUdDO0FBakdZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgQXR0ckJhc2Uge1xuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc3RyaW5nOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYm9vbGVhbjogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9kYXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbnVtYmVyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGlzdE9mT2JqOiBhbnlbXTtcbiAgICBwcml2YXRlIF9saXN0OiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHI/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fc2V0KGF0dHIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0KGF0dHI/OiBhbnkpIHtcbiAgICAgICAgaWYgKCFhdHRyKSByZXR1cm47XG4gICAgICAgIC8vdGhpcy5faWQgPSBhdHRyLmlkO1xuICAgICAgICB0aGlzLl9zdHJpbmcgPSBhdHRyLnN0cmluZyB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2Jvb2xlYW4gPSBhdHRyLmJvb2xlYW4gIT09IHVuZGVmaW5lZCA/IGF0dHIuYm9vbGVhbiA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IGF0dHIuZGF0ZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX251bWJlciA9IGF0dHIubnVtYmVyIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlID0gYXR0ci5yZWZlcmVuY2UgfHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9saXN0T2ZPYmogPSBhdHRyLmxpc3RPZk9iaiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBhdHRyLmxpc3QgJiYgQXJyYXkuaXNBcnJheShhdHRyLmxpc3QpID8gYXR0ci5saXN0IDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3N0cmluZyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm9vbGVhbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jvb2xlYW47XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYm9vbGVhbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9ib29sZWFuID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUodGhpcy5fZGF0ZSkudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG51bWJlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX251bWJlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVmZXJlbmNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcmVmZXJlbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaXN0T2ZPYmooKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdE9mT2JqXG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbGlzdE9mT2JqKHZhbHVlOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9saXN0T2ZPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxpc3QoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBsaXN0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLl9saXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhWydpZCddID0gdGhpcy5faWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0cmluZykgeyBkYXRhWydzdHJpbmcnXSA9IHRoaXMuX3N0cmluZzsgfVxuICAgICAgICBpZiAodGhpcy5fYm9vbGVhbiAhPT0gdW5kZWZpbmVkKSB7IGRhdGFbJ2Jvb2xlYW4nXSA9IHRoaXMuX2Jvb2xlYW47IH1cbiAgICAgICAgaWYgKHRoaXMuX2RhdGUpIHsgZGF0YVsnZGF0ZSddID0gdGhpcy5fZGF0ZTsgfVxuICAgICAgICBpZiAodGhpcy5fbnVtYmVyICE9PSB1bmRlZmluZWQpIHsgZGF0YVsnbnVtYmVyJ10gPSB0aGlzLl9udW1iZXI7IH1cbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZSkgeyBkYXRhWydyZWZlcmVuY2UnXSA9IHRoaXMuX3JlZmVyZW5jZTsgfVxuICAgICAgICBpZiAodGhpcy5fbGlzdE9mT2JqKSB7IGRhdGFbJ2xpc3RPZk9iaiddID0gdGhpcy5fbGlzdE9mT2JqOyB9XG4gICAgICAgIGlmICh0aGlzLl9saXN0KSB7IGRhdGFbJ2xpc3QnXSA9IHRoaXMuX2xpc3Q7IH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59Il19
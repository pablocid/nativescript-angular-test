"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var updated_1 = require("./updated");
var Record = (function (_super) {
    __extends(Record, _super);
    function Record() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Record.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        set: function (value) {
            this._schema = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "schm", {
        get: function () {
            return this.schema.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "attributes", {
        get: function () {
            return this._attributes;
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "reference", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Record.prototype.getData = function (userSign) {
        var data = {};
        if (this._id)
            data['_id'] = this._id;
        if (!this.created)
            this.created = new Date();
        if (userSign !== 'noSign') {
            this.update(new updated_1.Updated({ user: userSign, date: new Date().toISOString() }));
        }
        data['schm'] = this.schm;
        data['created'] = this._created;
        data['updated'] = this._updated.map(function (x) { return x.data; });
        if (Array.isArray(this._attributes)) {
            data['attributes'] = this._attributes.map(function (x) { return x.data; });
        }
        return data;
    };
    Record.prototype.getAttribute = function (value) {
        var index = this._attributes.map(function (x) { return x.id; }).indexOf(value);
        if (index !== -1)
            return this._attributes[index];
    };
    return Record;
}(base_1.Base));
exports.Record = Record;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsK0JBQThCO0FBRTlCLHFDQUFtQztBQUVuQztJQUE0QiwwQkFBSTtJQUk1QjtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELHNCQUFXLDBCQUFNO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBc0IsS0FBa0I7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyw2QkFBUzthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFFTSx3QkFBTyxHQUFkLFVBQWUsUUFBaUI7UUFDNUIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlCQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDO1FBRWpELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSw2QkFBWSxHQUFuQixVQUFvQixLQUFhO1FBRTdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDLEFBekRELENBQTRCLFdBQUksR0F5RC9CO0FBekRZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYW1DaGVja2VyIH0gZnJvbSAnLi4vSGVscGVycy9wYXJhbUNoZWNrZXInO1xuaW1wb3J0IHsgQXR0cmlidXRlU2NobSwgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGUgfSBmcm9tICcuL2F0dHJpYnV0ZSc7XG5pbXBvcnQgeyBVcGRhdGVkIH0gZnJvbSAnLi91cGRhdGVkJ1xuXG5leHBvcnQgY2xhc3MgUmVjb3JkIGV4dGVuZHMgQmFzZSB7XG4gICAgcHJpdmF0ZSBfc2NoZW1hOiBTY2hlbWE7XG4gICAgcHJvdGVjdGVkIF9hdHRyaWJ1dGVzOiBBdHRyaWJ1dGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2NoZW1hKCk6IFNjaGVtYSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY2hlbWE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzY2hlbWEodmFsdWU6IFNjaGVtYSkge1xuICAgICAgICB0aGlzLl9zY2hlbWEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNjaG0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXR0cmlidXRlcyh2YWx1ZTogQXR0cmlidXRlW10pIHtcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVmZXJlbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF0YSh1c2VyU2lnbj86IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuX2lkKSBkYXRhWydfaWQnXSA9IHRoaXMuX2lkO1xuICAgICAgICBpZiAoIXRoaXMuY3JlYXRlZCkgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKHVzZXJTaWduICE9PSAnbm9TaWduJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUobmV3IFVwZGF0ZWQoeyB1c2VyOiB1c2VyU2lnbiAsIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhWydzY2htJ10gPSB0aGlzLnNjaG07XG4gICAgICAgIGRhdGFbJ2NyZWF0ZWQnXSA9IHRoaXMuX2NyZWF0ZWQ7XG4gICAgICAgIGRhdGFbJ3VwZGF0ZWQnXSA9IHRoaXMuX3VwZGF0ZWQubWFwKHggPT4geC5kYXRhKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9hdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgZGF0YVsnYXR0cmlidXRlcyddID0gdGhpcy5fYXR0cmlidXRlcy5tYXAoeCA9PiB4LmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEF0dHJpYnV0ZSh2YWx1ZTogc3RyaW5nKTogQXR0cmlidXRlIHtcblxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9hdHRyaWJ1dGVzLm1hcCh4ID0+IHguaWQpLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tpbmRleF07XG4gICAgfVxuXG59Il19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Updated = (function () {
    function Updated(update) {
        if (update.user) {
            this._user = update.user;
        }
        if (update.date) {
            this._date = new Date(update.date);
        }
    }
    Object.defineProperty(Updated.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Updated.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Updated.prototype, "data", {
        get: function () {
            return {
                user: this._user,
                date: this._date
            };
        },
        enumerable: true,
        configurable: true
    });
    return Updated;
}());
exports.Updated = Updated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwZGF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUlJLGlCQUFZLE1BQXVDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0JBQVcseUJBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQVcseUJBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFnQixLQUFXO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQVcseUJBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQztnQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSzthQUNuQixDQUFBO1FBQ0wsQ0FBQzs7O09BQUE7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVcGRhdGVkIHtcbiAgICBwcml2YXRlIF91c2VyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHVwZGF0ZT86IHsgdXNlcjogc3RyaW5nLCBkYXRlOiBzdHJpbmcgfSkge1xuICAgICAgICBpZiAodXBkYXRlLnVzZXIpIHsgdGhpcy5fdXNlciA9IHVwZGF0ZS51c2VyOyB9XG4gICAgICAgIGlmICh1cGRhdGUuZGF0ZSkgeyB0aGlzLl9kYXRlID0gbmV3IERhdGUodXBkYXRlLmRhdGUpOyB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB1c2VyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdXNlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlcjogdGhpcy5fdXNlcixcbiAgICAgICAgICAgIGRhdGU6IHRoaXMuX2RhdGVcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
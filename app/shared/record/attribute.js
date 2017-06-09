"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paramChecker_1 = require("../Helpers/paramChecker");
var attrBase_1 = require("./attrBase");
var Attribute = (function (_super) {
    __extends(Attribute, _super);
    function Attribute(schema, raw, parent) {
        var _this = _super.call(this, raw) || this;
        _this.schema = schema;
        _this.id = _this.schema.id;
        if (parent)
            _this.parent = parent;
        return _this;
    }
    Attribute.make = function () { };
    Object.defineProperty(Attribute.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (reference) {
            this._parent = reference;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        set: function (value) {
            if (!value)
                return;
            this._schema = value;
            this.id = this._schema.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "dataType", {
        get: function () {
            return this._schema.input.dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "name", {
        get: function () {
            return this._schema.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "input", {
        get: function () {
            return this._schema.input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "value", {
        get: function () {
            return this[this.dataType];
        },
        set: function (v) {
            var pcheck = new paramChecker_1.ParamChecker(v, this.dataType);
            if (pcheck.check) {
                this[this.dataType] = v;
            }
            else {
                console.log("\n                Parameter wrong | El valor " + v + " asignado al attributo " + this.name + " \n                con el _id " + this.id + " no coincide con el dataType " + this.dataType + "\n            ");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "data", {
        get: function () {
            return _a = {
                    id: this.id
                },
                _a[this.dataType] = this.value,
                _a;
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    return Attribute;
}(attrBase_1.AttrBase));
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXVEO0FBTXZELHVDQUFzQztBQUV0QztJQUErQiw2QkFBUTtJQU1uQyxtQkFBWSxNQUFxQixFQUFFLEdBQVMsRUFBRSxNQUFlO1FBQTdELFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBSWI7UUFIRyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztJQUNyQyxDQUFDO0lBUGEsY0FBSSxHQUFsQixjQUF1QixDQUFDO0lBU3hCLHNCQUFXLDZCQUFNO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQWtCLFNBQWlCO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBTUQsc0JBQVcsNkJBQU07YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBa0IsS0FBb0I7WUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBRW5CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQzs7O09BUEE7SUFTRCxzQkFBVywrQkFBUTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFpQixDQUFDO1lBQ2QsSUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQ3FCLENBQUMsK0JBQTBCLElBQUksQ0FBQyxJQUFJLHNDQUNwRCxJQUFJLENBQUMsRUFBRSxxQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsbUJBQ3BFLENBQUMsQ0FBQztZQUNQLENBQUM7UUFFTCxDQUFDOzs7T0FiQTtJQWdCRCxzQkFBVywyQkFBSTthQUFmO1lBQ0ksTUFBTTtvQkFDRixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7O2dCQUNYLEdBQUMsSUFBSSxDQUFDLFFBQVEsSUFBRyxJQUFJLENBQUMsS0FBSzttQkFDN0I7O1FBQ04sQ0FBQzs7O09BQUE7SUFFTCxnQkFBQztBQUFELENBQUMsQUFyRUQsQ0FBK0IsbUJBQVEsR0FxRXRDO0FBckVZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYW1DaGVja2VyIH0gZnJvbSAnLi4vSGVscGVycy9wYXJhbUNoZWNrZXInO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2RiX2xvY2FsL2xva2knO1xuaW1wb3J0IHsgU2NoZW1hQnVpbGRlciwgUmVjb3JkQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBBdHRyaWJ1dGVTY2htLCBTY2hlbWEsIElucHV0U2NobSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFJlY29yZCB9IGZyb20gJy4vcmVjb3JkJztcbmltcG9ydCB7IFVwZGF0ZWQgfSBmcm9tICcuL3VwZGF0ZWQnO1xuaW1wb3J0IHsgQXR0ckJhc2UgfSBmcm9tICcuL2F0dHJCYXNlJztcblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIEF0dHJCYXNlIHtcbiAgICBwcml2YXRlIF9zY2hlbWE6IEF0dHJpYnV0ZVNjaG07XG4gICAgcHJpdmF0ZSBfcGFyZW50OiBSZWNvcmQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIG1ha2UoKSB7IH1cblxuICAgIGNvbnN0cnVjdG9yKHNjaGVtYTogQXR0cmlidXRlU2NobSwgcmF3PzogYW55LCBwYXJlbnQ/OiBSZWNvcmQpIHtcbiAgICAgICAgc3VwZXIocmF3KTtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnNjaGVtYS5pZDtcbiAgICAgICAgaWYgKHBhcmVudCkgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJlbnQocmVmZXJlbmNlOiBSZWNvcmQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcmVmZXJlbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2NoZW1hKCk6IEF0dHJpYnV0ZVNjaG0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2NoZW1hKHZhbHVlOiBBdHRyaWJ1dGVTY2htKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgICAgICB0aGlzLl9zY2hlbWEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuX3NjaGVtYS5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hLmlucHV0LmRhdGFUeXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hLm5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbnB1dCgpOiBJbnB1dFNjaG0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hLmlucHV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5kYXRhVHlwZV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIGNvbnN0IHBjaGVjayA9IG5ldyBQYXJhbUNoZWNrZXIodiwgdGhpcy5kYXRhVHlwZSk7XG4gICAgICAgIGlmIChwY2hlY2suY2hlY2spIHtcbiAgICAgICAgICAgIHRoaXNbdGhpcy5kYXRhVHlwZV0gPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFxuICAgICAgICAgICAgICAgIFBhcmFtZXRlciB3cm9uZyB8IEVsIHZhbG9yICR7dn0gYXNpZ25hZG8gYWwgYXR0cmlidXRvICR7dGhpcy5uYW1lfSBcbiAgICAgICAgICAgICAgICBjb24gZWwgX2lkICR7dGhpcy5pZH0gbm8gY29pbmNpZGUgY29uIGVsIGRhdGFUeXBlICR7dGhpcy5kYXRhVHlwZX1cbiAgICAgICAgICAgIGApO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBbdGhpcy5kYXRhVHlwZV06IHRoaXMudmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var attrBase_1 = require("./attrBase");
var Schema = (function (_super) {
    __extends(Schema, _super);
    function Schema(schm) {
        var _this = _super.call(this) || this;
        _this._setData(schm);
        return _this;
    }
    Object.defineProperty(Schema.prototype, "name", {
        get: function () {
            return this.getAttr('name', 'string');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "description", {
        get: function () {
            return this.getAttr('description', 'string');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Schema.prototype._setData = function (schm) {
        if (schm) {
            this._id = schm._id;
            this._type = schm.type;
            this._name = schm.name;
            this._created = schm.created;
            this._updated = schm.updated;
            this._attributes = [];
            if (Array.isArray(schm.attributes)) {
                this._attributes = schm.attributes; //.map(x => new AttrBase(x));
            }
        }
    };
    Schema.prototype.getAttr = function (attrId, target, key) {
        if (!key) {
            key = 'id';
        }
        ;
        if (key === undefined && attrId === undefined) {
            return null;
        }
        var index = this._attributes.map(function (x) { return x[key]; }).indexOf(attrId);
        if (index === -1) {
            return null;
        }
        if (target === undefined) {
            return this._attributes[index];
        }
        return this._attributes[index][target];
    };
    Object.defineProperty(Schema.prototype, "data", {
        get: function () {
            var data = {};
            if (this._id) {
                data['_id'] = this._id;
            }
            data['type'] = this._type;
            data['name'] = this._name;
            data['created'] = this._created;
            data['updated'] = this._updated;
            if (this._attributes && this._attributes.length) {
                data['attributes'] = this._attributes.map(function (x) { return x.data; });
            }
            return data;
        },
        set: function (record) {
            if (record) {
                this._id = record._id;
                this._type = record.type;
                this._name = record.name;
                this._created = record.created;
                this._updated = record.updated;
                this._attributes = [];
                if (record.attributes && record.attributes.length) {
                    this._attributes = record.attributes.map(function (x) { return new attrBase_1.AttrBase(x); });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "properties", {
        get: function () {
            var keyObj = this.getAttr('keys', 'listOfObj');
            if (!keyObj || keyObj.legth === 0) {
                return {};
            }
            var data = {};
            for (var index = 0; index < keyObj.length; index++) {
                var id = keyObj[index]['id'];
                var value = keyObj[index]['string'];
                data[id] = this.getAttr(id, value);
            }
            return data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "listAttrIds", {
        get: function () {
            return this.getAttr('attributes', 'list');
        },
        enumerable: true,
        configurable: true
    });
    return Schema;
}(base_1.Base));
exports.Schema = Schema;
var SchmSchemaObj = (function () {
    function SchmSchemaObj(schm) {
        var _this = this;
        if (schm) {
            this._id = schm._id;
            this._type = schm.type;
            this._name = schm.name;
            this._created = new Date(schm.created);
            this._updated = schm.updated;
            this._attributes = [];
            if (schm.attributes && schm.attributes.length) {
                schm.attributes.forEach(function (x) {
                    _this._attributes.push(new attrBase_1.AttrBase(x));
                });
                //this._attributes=schm.attributes;
            }
        }
    }
    Object.defineProperty(SchmSchemaObj.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchmSchemaObj.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchmSchemaObj.prototype, "attributes", {
        get: function () {
            return this._attributes;
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: true,
        configurable: true
    });
    SchmSchemaObj.prototype.getAttr = function (attrId, dt) {
        return this.findValueByVarHelper("id", attrId, dt);
    };
    SchmSchemaObj.prototype.findValueByVarHelper = function (key, value, target) {
        if (key === undefined && value === undefined) {
            return null;
        }
        var index = this._attributes.map(function (x) { return x[key]; }).indexOf(value);
        if (index === -1) {
            return null;
        }
        if (target === undefined) {
            return this._attributes[index];
        }
        return this._attributes[index][target];
    };
    return SchmSchemaObj;
}());
exports.SchmSchemaObj = SchmSchemaObj;
var AttributeSchm = (function (_super) {
    __extends(AttributeSchm, _super);
    function AttributeSchm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AttributeSchm.prototype, "inputRef", {
        get: function () {
            return this.getAttr('input', 'reference');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeSchm.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeSchm.prototype, "dataType", {
        get: function () {
            return this.getAttr('dataType', 'string');
        },
        enumerable: true,
        configurable: true
    });
    return AttributeSchm;
}(Schema));
exports.AttributeSchm = AttributeSchm;
var InputSchm = (function (_super) {
    __extends(InputSchm, _super);
    function InputSchm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputSchm.prototype, "dataType", {
        get: function () {
            return this.getAttr('dataType', 'string');
        },
        enumerable: true,
        configurable: true
    });
    return InputSchm;
}(Schema));
exports.InputSchm = InputSchm;
var SchemaBuilder = (function () {
    function SchemaBuilder(schema) {
        this._data = schema;
        this._setInputSchms(schema);
        this._setSchema(schema);
        // esta función requiere de que los _inputs esten seteados;
        this._setAttrSchms(schema);
        this.id = this.schm.id;
    }
    Object.defineProperty(SchemaBuilder.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaBuilder.prototype, "schm", {
        get: function () {
            return this._schm;
        },
        set: function (value) {
            this._schm = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaBuilder.prototype, "listAttrIds", {
        get: function () {
            return this.schm.listAttrIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaBuilder.prototype, "attrSchms", {
        get: function () {
            return this._attrSchms;
        },
        set: function (value) {
            this._attrSchms = value;
        },
        enumerable: true,
        configurable: true
    });
    SchemaBuilder.prototype._setSchema = function (values) {
        var schema = values.filter(function (x) { return x.type === 'schema'; });
        if (schema.length) {
            this._schm = new Schema(schema[0]);
            //console.log(JSON.stringify(this._schema))
        }
    };
    SchemaBuilder.prototype._setAttrSchms = function (values) {
        var _this = this;
        var attrConfs = values.filter(function (x) { return x.type === 'attribute'; });
        if (attrConfs.length) {
            this._attrSchms = attrConfs.map(function (x) {
                var a = new AttributeSchm(x);
                var index = _this._inputs.map(function (i) { return i.id; }).indexOf(a.inputRef);
                if (index !== -1) {
                    a.input = _this._inputs[index];
                }
                else {
                    console.log('El attributo no hizo match con un input. Cuidadooooo !!!!!!');
                }
                return a;
            });
        }
    };
    SchemaBuilder.prototype._setInputSchms = function (values) {
        var attrConfs = values.filter(function (x) { return x.type === 'input'; });
        if (attrConfs.length) {
            this._inputs = attrConfs.map(function (x) { return new InputSchm(x); });
        }
    };
    return SchemaBuilder;
}());
exports.SchemaBuilder = SchemaBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLHVDQUFzQztBQUd0QztJQUE0QiwwQkFBSTtJQUs1QixnQkFBWSxJQUFVO1FBQXRCLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3hCLENBQUM7SUFFRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQVc7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFPTyx5QkFBUSxHQUFoQixVQUFpQixJQUFTO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxD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IFVwZGF0ZWQgfSBmcm9tICcuL3VwZGF0ZWQnO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBBdHRyQmFzZSB9IGZyb20gJy4vYXR0ckJhc2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWEgZXh0ZW5kcyBCYXNlIHtcbiAgICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2F0dHJpYnV0ZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3Ioc2NobT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zZXREYXRhKHNjaG0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyKCduYW1lJywgJ3N0cmluZycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cignZGVzY3JpcHRpb24nLCAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgX3NldERhdGEoc2NobTogYW55KSB7XG4gICAgICAgIGlmIChzY2htKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHNjaG0uX2lkO1xuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHNjaG0udHlwZTtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBzY2htLm5hbWU7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gc2NobS5jcmVhdGVkO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlZCA9IHNjaG0udXBkYXRlZDtcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjaG0uYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVzID0gc2NobS5hdHRyaWJ1dGVzLy8ubWFwKHggPT4gbmV3IEF0dHJCYXNlKHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdHRyKGF0dHJJZDogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIGtleT86IHN0cmluZykge1xuICAgICAgICBpZiAoIWtleSkgeyBrZXkgPSAnaWQnIH07XG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCAmJiBhdHRySWQgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2F0dHJpYnV0ZXMubWFwKHggPT4geFtrZXldKS5pbmRleE9mKGF0dHJJZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tpbmRleF07IH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tpbmRleF1bdGFyZ2V0XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuX2lkKSB7XG4gICAgICAgICAgICBkYXRhWydfaWQnXSA9IHRoaXMuX2lkXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVsndHlwZSddID0gdGhpcy5fdHlwZTtcbiAgICAgICAgZGF0YVsnbmFtZSddID0gdGhpcy5fbmFtZTtcbiAgICAgICAgZGF0YVsnY3JlYXRlZCddID0gdGhpcy5fY3JlYXRlZDtcbiAgICAgICAgZGF0YVsndXBkYXRlZCddID0gdGhpcy5fdXBkYXRlZDtcblxuICAgICAgICBpZiAodGhpcy5fYXR0cmlidXRlcyAmJiB0aGlzLl9hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YVsnYXR0cmlidXRlcyddID0gdGhpcy5fYXR0cmlidXRlcy5tYXAoeCA9PiB4LmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGF0YShyZWNvcmQ6IGFueSkge1xuICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHJlY29yZC5faWQ7XG4gICAgICAgICAgICB0aGlzLl90eXBlID0gcmVjb3JkLnR5cGU7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gcmVjb3JkLm5hbWU7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gcmVjb3JkLmNyZWF0ZWQ7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVkID0gcmVjb3JkLnVwZGF0ZWQ7XG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZXMgJiYgcmVjb3JkLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IHJlY29yZC5hdHRyaWJ1dGVzLm1hcCh4ID0+IG5ldyBBdHRyQmFzZSh4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9wZXJ0aWVzKCk6IGFueSB7XG5cbiAgICAgICAgdmFyIGtleU9iaiA9IHRoaXMuZ2V0QXR0cigna2V5cycsICdsaXN0T2ZPYmonKTtcblxuICAgICAgICBpZiAoIWtleU9iaiB8fCBrZXlPYmoubGVndGggPT09IDApIHsgcmV0dXJuIHt9OyB9XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGtleU9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpZCA9IGtleU9ialtpbmRleF1bJ2lkJ107XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBrZXlPYmpbaW5kZXhdWydzdHJpbmcnXTtcblxuICAgICAgICAgICAgZGF0YVtpZF0gPSB0aGlzLmdldEF0dHIoaWQsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGxpc3RBdHRySWRzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cignYXR0cmlidXRlcycsICdsaXN0Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NobVNjaGVtYU9iaiB7XG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IERhdGU7XG4gICAgcHJpdmF0ZSBfdXBkYXRlZDogYW55O1xuICAgIHByaXZhdGUgX2F0dHJpYnV0ZXM6IEF0dHJCYXNlW107XG5cbiAgICBjb25zdHJ1Y3RvcihzY2htPykge1xuICAgICAgICBpZiAoc2NobSkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBzY2htLl9pZDtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUgPSBzY2htLnR5cGU7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gc2NobS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IG5ldyBEYXRlKHNjaG0uY3JlYXRlZCk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVkID0gc2NobS51cGRhdGVkO1xuICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAgICAgaWYgKHNjaG0uYXR0cmlidXRlcyAmJiBzY2htLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBzY2htLmF0dHJpYnV0ZXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKG5ldyBBdHRyQmFzZSh4KSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL3RoaXMuX2F0dHJpYnV0ZXM9c2NobS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgcHVibGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZXMoKTogQXR0ckJhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXR0cmlidXRlcyh2YWx1ZTogQXR0ckJhc2VbXSkge1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEF0dHIoYXR0cklkOiBzdHJpbmcsIGR0OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFZhbHVlQnlWYXJIZWxwZXIoXCJpZFwiLCBhdHRySWQsIGR0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmluZFZhbHVlQnlWYXJIZWxwZXIoa2V5LCB2YWx1ZSwgdGFyZ2V0Pykge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2F0dHJpYnV0ZXMubWFwKHggPT4geFtrZXldKS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzW2luZGV4XTsgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzW2luZGV4XVt0YXJnZXRdO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVTY2htIGV4dGVuZHMgU2NoZW1hIHtcbiAgICBwcml2YXRlIF9pbnB1dDogSW5wdXRTY2htO1xuICAgIHB1YmxpYyBnZXQgaW5wdXRSZWYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cignaW5wdXQnLCAncmVmZXJlbmNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbnB1dCgpOiBJbnB1dFNjaG0ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpbnB1dCh2YWx1ZTogSW5wdXRTY2htKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyKCdkYXRhVHlwZScsICdzdHJpbmcnKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0U2NobSBleHRlbmRzIFNjaGVtYSB7XG4gICAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyKCdkYXRhVHlwZScsICdzdHJpbmcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFCdWlsZGVyIHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9zY2htOiBTY2hlbWE7XG4gICAgcHJpdmF0ZSBfYXR0clNjaG1zOiBBdHRyaWJ1dGVTY2htW107XG4gICAgcHJpdmF0ZSBfaW5wdXRzOiBJbnB1dFNjaG1bXTtcbiAgICBwcml2YXRlIF9kYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2hlbWE6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuX3NldElucHV0U2NobXMoc2NoZW1hKTtcbiAgICAgICAgdGhpcy5fc2V0U2NoZW1hKHNjaGVtYSk7XG5cbiAgICAgICAgLy8gZXN0YSBmdW5jacOzbiByZXF1aWVyZSBkZSBxdWUgbG9zIF9pbnB1dHMgZXN0ZW4gc2V0ZWFkb3M7XG4gICAgICAgIHRoaXMuX3NldEF0dHJTY2htcyhzY2hlbWEpO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5zY2htLmlkO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQgc2NobSgpOiBTY2hlbWEge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NobTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNjaG0odmFsdWU6IFNjaGVtYSkge1xuICAgICAgICB0aGlzLl9zY2htID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaXN0QXR0cklkcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaG0ubGlzdEF0dHJJZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdHRyU2NobXMoKTogQXR0cmlidXRlU2NobVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dHJTY2htcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF0dHJTY2htcyh2YWx1ZTogQXR0cmlidXRlU2NobVtdKSB7XG4gICAgICAgIHRoaXMuX2F0dHJTY2htcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldFNjaGVtYSh2YWx1ZXM6IGFueVtdKSB7XG4gICAgICAgIGxldCBzY2hlbWEgPSB2YWx1ZXMuZmlsdGVyKHggPT4geC50eXBlID09PSAnc2NoZW1hJyk7XG4gICAgICAgIGlmIChzY2hlbWEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zY2htID0gbmV3IFNjaGVtYShzY2hlbWFbMF0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuX3NjaGVtYSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRBdHRyU2NobXModmFsdWVzOiBhbnlbXSkge1xuICAgICAgICBsZXQgYXR0ckNvbmZzID0gdmFsdWVzLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ2F0dHJpYnV0ZScpO1xuICAgICAgICBpZiAoYXR0ckNvbmZzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fYXR0clNjaG1zID0gYXR0ckNvbmZzLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBBdHRyaWJ1dGVTY2htKHgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2lucHV0cy5tYXAoaSA9PiBpLmlkKS5pbmRleE9mKGEuaW5wdXRSZWYpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5pbnB1dCA9IHRoaXMuX2lucHV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VsIGF0dHJpYnV0byBubyBoaXpvIG1hdGNoIGNvbiB1biBpbnB1dC4gQ3VpZGFkb29vb28gISEhISEhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NldElucHV0U2NobXModmFsdWVzOiBhbnlbXSkge1xuICAgICAgICBsZXQgYXR0ckNvbmZzID0gdmFsdWVzLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ2lucHV0Jyk7XG4gICAgICAgIGlmIChhdHRyQ29uZnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dHMgPSBhdHRyQ29uZnMubWFwKHggPT4gbmV3IElucHV0U2NobSh4KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=
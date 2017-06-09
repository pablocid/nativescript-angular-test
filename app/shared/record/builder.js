"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var record_1 = require("./record");
var RecordBuilder = (function () {
    function RecordBuilder() {
    }
    RecordBuilder.make = function (raw) {
        var r = new record_1.Record();
        r.id = raw.id;
        r.setCreateISOString(raw.created);
        r.setUpdated(raw.updated);
        //r.attribute = RecordBuilder._setAttribute(raw.attribute);
    };
    return RecordBuilder;
}());
exports.RecordBuilder = RecordBuilder;
var SchemaBuilder = (function () {
    function SchemaBuilder() {
    }
    return SchemaBuilder;
}());
exports.SchemaBuilder = SchemaBuilder;
/*
export class Record extends Base {
    private _schema: SchemaBuilder;
    protected _attributes: Attribute[];

    constructor(schm: SchemaBuilder, record?: any) {
        if (!schm) {
            throw new Error('no se pudo crear el Record porque el schema es null.')
        }
        super();

        this._schema = schm;
        this._setData(record);

    }

    public get schema(): SchemaBuilder {
        return this._schema;
    }

    public set schema(value: SchemaBuilder) {
        this._schema = value;
    }

    private _setData(record: any) {
        if (record) {
            this._id = record._id;
            this._created = record.created;
            this._updated = record.updated;
        }
        this._attributes = [];

        if (!record.attributes && !record.attributes.length) return;

        this.schema.attrSchms.forEach(a=>{
            record.attributes.filter(x=>x.id === a.id)
        });

        this.schema.listAttrIds.forEach(l => {

            let indexSchm = this._schema.attrSchms.map(s => s.id).indexOf(l);
            let indexAttr: any;
            if (record && record.attributes && record.attributes.length) {
                indexAttr = record.attributes.map(s => s.id).indexOf(l);
            } else {
                indexAttr = -1;
            }

            if (indexSchm !== -1) {
                if (indexAttr !== -1) {
                    this._attributes.push(
                        new Attribute(this, this._schema.attrSchms[indexSchm], record.attributes[indexAttr])
                    );
                } else {
                    this._attributes.push(
                        new Attribute(this, this._schema.attrSchms[indexSchm])
                    );
                }
            }
        });

    }

    public get data(): any {
        let data = {};
        if (this._id) {
            data['_id'] = this._id
        }
        data['schm'] = this.schema.id;
        data['created'] = this._created;
        data['updated'] = this._updated;

        if (this._attributes && this._attributes.length) {
            data['attributes'] = this._attributes.map(x => x.data);
        }

        return data;
    }

    public set data(record: any) {
        this._setData(record);
    }

    public getAttribute(value: string): Attribute {

        let index = this._attributes.map(x => x.id).indexOf(value);
        if (index !== -1) {
            return this._attributes[index];
        }
    }

    public isWarn(): boolean {
        if (this._schema.schm.properties.isWarn) {
            //console.log(this._schema.schm.properties.isWarn[0].string);
            let id = this._schema.schm.properties.isWarn[0].id;
            let filter = JSON.parse(this._schema.schm.properties.isWarn[0].string);
            if (this.getAttribute(id).value < filter.$gte) {
                return true;
            }
        }
        return false;
    }
}

export class Plant extends Record {
    private _record: Record;

    public set record(value: Record) {
        this._record = value;
    }

    public get record(): Record {
        return this._record;
    }
    public getUbicación(): string {
        //console.log('Plant - getUbicación');
        let espaldera = this.getAttribute('5807af5f31f55d0010aaffe4').value;
        let hilera = this.getAttribute('5807af9231f55d0010aaffe5').value;
        let posicion = this.getAttribute('5807afe331f55d0010aaffe6').value || '-';
        if (espaldera && hilera) {
            return `E${espaldera} H${hilera} P${posicion}`;
        }

        return 'ubicación ***';
    }

    public get ubicacion(): string {
        return this.getUbicación();
    }

    public get name(): string {
        //console.log('Plant - getUbicación');
        let espaldera = this.getAttribute('5807af5f31f55d0010aaffe4').value;
        let hilera = this.getAttribute('5807af9231f55d0010aaffe5').value;
        let posicion = this.getAttribute('5807afe331f55d0010aaffe6').value || '-';
        if (espaldera && hilera) {
            return `E${espaldera} H${hilera} P${posicion}`;
        }

        return 'ubicación ***';
    }

    public get position(): number {
        return this.getAttribute('5807afe331f55d0010aaffe6').value;
    }

    public get hilera(): number {
        return this.getAttribute('5807af9231f55d0010aaffe5').value;
    }

    public get espaldera(): number {
        return this.getAttribute('5807af5f31f55d0010aaffe4').value;
    }
}

export class Attribute {
    private _value: any;
    private _attrSchm: AttributeSchm;
    private _reference: Record;

    constructor(reference: Record, attrSchm: AttributeSchm, attr?) {
        this._attrSchm = attrSchm;
        this._reference = reference;

        this._setAttribute(attr);
    }

    public get parent() {
        return this._reference;
    }

    private _setAttribute(attr) {
        if (attr && attr.id === this._attrSchm.id) {
            this._value = attr[this.dataType];
        }
    }

    public get attrSchm(): AttributeSchm {
        return this._attrSchm;
    }

    public set attrSchm(value: AttributeSchm) {
        this._attrSchm = value;
    }

    public get dataType() {
        return this._attrSchm.input.dataType;
    }

    public get name(): string {
        return this._attrSchm.name;
    }

    public get value() {
        return this._value;
    }

    public set value(v) {
        let pcheck = new ParamChecker(v, this.dataType);
        if (pcheck.check) {
            this._value = v;
        } else {
            console.log(`
                Parameter wrong | El valor ${v} asignado al attributo ${this.name}
                con el _id ${this.id} no coincide con el dataType ${this.dataType}
            `);
        }

    }

    public get id(): string {
        return this._attrSchm.id;
    }

    public get data() {
        var d = {};
        d['id'] = this.id;
        d[this.dataType] = this.value;

        return d;
    }

}

*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxtQ0FBa0M7QUFHbEM7SUFBQTtJQWNBLENBQUM7SUFiaUIsa0JBQUksR0FBbEIsVUFBbUIsR0FBUTtRQUN2QixJQUFNLENBQUMsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsMkRBQTJEO0lBRS9ELENBQUM7SUFNTCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksc0NBQWE7QUFrQjFCO0lBQUE7SUFFQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHNDQUFhO0FBYzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtQ2hlY2tlciB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgQXR0cmlidXRlU2NobSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgUmVjb3JkIH0gZnJvbSAnLi9yZWNvcmQnO1xuaW1wb3J0IHsgQXR0cmlidXRlIH0gZnJvbSAnLi9hdHRyaWJ1dGUnO1xuXG5leHBvcnQgY2xhc3MgUmVjb3JkQnVpbGRlciB7XG4gICAgcHVibGljIHN0YXRpYyBtYWtlKHJhdzogYW55KSB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgUmVjb3JkKCk7XG4gICAgICAgIHIuaWQgPSByYXcuaWQ7XG4gICAgICAgIHIuc2V0Q3JlYXRlSVNPU3RyaW5nKHJhdy5jcmVhdGVkKTtcbiAgICAgICAgci5zZXRVcGRhdGVkKHJhdy51cGRhdGVkKTtcbiAgICAgICAgLy9yLmF0dHJpYnV0ZSA9IFJlY29yZEJ1aWxkZXIuX3NldEF0dHJpYnV0ZShyYXcuYXR0cmlidXRlKTtcblxuICAgIH1cblxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgX3NldEF0dHJpYnV0ZShyYXc6IGFueVtdKTogQXR0cmlidXRlW117XG5cbiAgICAgICAgLy9yZXR1cm4gcmF3Lm1hcCh4PT4gbmV3IEF0dHJpYnV0ZSh7fSwgeCkpXG4gICAgLy99XG59XG5cblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hQnVpbGRlciB7XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKlxuZXhwb3J0IGNsYXNzIFJlY29yZCBleHRlbmRzIEJhc2Uge1xuICAgIHByaXZhdGUgX3NjaGVtYTogU2NoZW1hQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgX2F0dHJpYnV0ZXM6IEF0dHJpYnV0ZVtdO1xuXG4gICAgY29uc3RydWN0b3Ioc2NobTogU2NoZW1hQnVpbGRlciwgcmVjb3JkPzogYW55KSB7XG4gICAgICAgIGlmICghc2NobSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBzZSBwdWRvIGNyZWFyIGVsIFJlY29yZCBwb3JxdWUgZWwgc2NoZW1hIGVzIG51bGwuJylcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX3NjaGVtYSA9IHNjaG07XG4gICAgICAgIHRoaXMuX3NldERhdGEocmVjb3JkKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2NoZW1hKCk6IFNjaGVtYUJ1aWxkZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2NoZW1hKHZhbHVlOiBTY2hlbWFCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuX3NjaGVtYSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldERhdGEocmVjb3JkOiBhbnkpIHtcbiAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSByZWNvcmQuX2lkO1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHJlY29yZC5jcmVhdGVkO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlZCA9IHJlY29yZC51cGRhdGVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXJlY29yZC5hdHRyaWJ1dGVzICYmICFyZWNvcmQuYXR0cmlidXRlcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNjaGVtYS5hdHRyU2NobXMuZm9yRWFjaChhPT57XG4gICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlcy5maWx0ZXIoeD0+eC5pZCA9PT0gYS5pZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2hlbWEubGlzdEF0dHJJZHMuZm9yRWFjaChsID0+IHtcblxuICAgICAgICAgICAgbGV0IGluZGV4U2NobSA9IHRoaXMuX3NjaGVtYS5hdHRyU2NobXMubWFwKHMgPT4gcy5pZCkuaW5kZXhPZihsKTtcbiAgICAgICAgICAgIGxldCBpbmRleEF0dHI6IGFueTtcbiAgICAgICAgICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLmF0dHJpYnV0ZXMgJiYgcmVjb3JkLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhBdHRyID0gcmVjb3JkLmF0dHJpYnV0ZXMubWFwKHMgPT4gcy5pZCkuaW5kZXhPZihsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXhBdHRyID0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleFNjaG0gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4QXR0ciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF0dHJpYnV0ZSh0aGlzLCB0aGlzLl9zY2hlbWEuYXR0clNjaG1zW2luZGV4U2NobV0sIHJlY29yZC5hdHRyaWJ1dGVzW2luZGV4QXR0cl0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF0dHJpYnV0ZSh0aGlzLCB0aGlzLl9zY2hlbWEuYXR0clNjaG1zW2luZGV4U2NobV0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBpZiAodGhpcy5faWQpIHtcbiAgICAgICAgICAgIGRhdGFbJ19pZCddID0gdGhpcy5faWRcbiAgICAgICAgfVxuICAgICAgICBkYXRhWydzY2htJ10gPSB0aGlzLnNjaGVtYS5pZDtcbiAgICAgICAgZGF0YVsnY3JlYXRlZCddID0gdGhpcy5fY3JlYXRlZDtcbiAgICAgICAgZGF0YVsndXBkYXRlZCddID0gdGhpcy5fdXBkYXRlZDtcblxuICAgICAgICBpZiAodGhpcy5fYXR0cmlidXRlcyAmJiB0aGlzLl9hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YVsnYXR0cmlidXRlcyddID0gdGhpcy5fYXR0cmlidXRlcy5tYXAoeCA9PiB4LmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkYXRhKHJlY29yZDogYW55KSB7XG4gICAgICAgIHRoaXMuX3NldERhdGEocmVjb3JkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXR0cmlidXRlKHZhbHVlOiBzdHJpbmcpOiBBdHRyaWJ1dGUge1xuXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2F0dHJpYnV0ZXMubWFwKHggPT4geC5pZCkuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpc1dhcm4oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9zY2hlbWEuc2NobS5wcm9wZXJ0aWVzLmlzV2Fybikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9zY2hlbWEuc2NobS5wcm9wZXJ0aWVzLmlzV2FyblswXS5zdHJpbmcpO1xuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5fc2NoZW1hLnNjaG0ucHJvcGVydGllcy5pc1dhcm5bMF0uaWQ7XG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLl9zY2hlbWEuc2NobS5wcm9wZXJ0aWVzLmlzV2FyblswXS5zdHJpbmcpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKGlkKS52YWx1ZSA8IGZpbHRlci4kZ3RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYW50IGV4dGVuZHMgUmVjb3JkIHtcbiAgICBwcml2YXRlIF9yZWNvcmQ6IFJlY29yZDtcblxuICAgIHB1YmxpYyBzZXQgcmVjb3JkKHZhbHVlOiBSZWNvcmQpIHtcbiAgICAgICAgdGhpcy5fcmVjb3JkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZWNvcmQoKTogUmVjb3JkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29yZDtcbiAgICB9XG4gICAgcHVibGljIGdldFViaWNhY2nDs24oKTogc3RyaW5nIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnUGxhbnQgLSBnZXRVYmljYWNpw7NuJyk7XG4gICAgICAgIGxldCBlc3BhbGRlcmEgPSB0aGlzLmdldEF0dHJpYnV0ZSgnNTgwN2FmNWYzMWY1NWQwMDEwYWFmZmU0JykudmFsdWU7XG4gICAgICAgIGxldCBoaWxlcmEgPSB0aGlzLmdldEF0dHJpYnV0ZSgnNTgwN2FmOTIzMWY1NWQwMDEwYWFmZmU1JykudmFsdWU7XG4gICAgICAgIGxldCBwb3NpY2lvbiA9IHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWZlMzMxZjU1ZDAwMTBhYWZmZTYnKS52YWx1ZSB8fCAnLSc7XG4gICAgICAgIGlmIChlc3BhbGRlcmEgJiYgaGlsZXJhKSB7XG4gICAgICAgICAgICByZXR1cm4gYEUke2VzcGFsZGVyYX0gSCR7aGlsZXJhfSBQJHtwb3NpY2lvbn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1YmljYWNpw7NuICoqKic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB1YmljYWNpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VWJpY2FjacOzbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdQbGFudCAtIGdldFViaWNhY2nDs24nKTtcbiAgICAgICAgbGV0IGVzcGFsZGVyYSA9IHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWY1ZjMxZjU1ZDAwMTBhYWZmZTQnKS52YWx1ZTtcbiAgICAgICAgbGV0IGhpbGVyYSA9IHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWY5MjMxZjU1ZDAwMTBhYWZmZTUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHBvc2ljaW9uID0gdGhpcy5nZXRBdHRyaWJ1dGUoJzU4MDdhZmUzMzFmNTVkMDAxMGFhZmZlNicpLnZhbHVlIHx8ICctJztcbiAgICAgICAgaWYgKGVzcGFsZGVyYSAmJiBoaWxlcmEpIHtcbiAgICAgICAgICAgIHJldHVybiBgRSR7ZXNwYWxkZXJhfSBIJHtoaWxlcmF9IFAke3Bvc2ljaW9ufWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ViaWNhY2nDs24gKioqJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnNTgwN2FmZTMzMWY1NWQwMDEwYWFmZmU2JykudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoaWxlcmEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWY5MjMxZjU1ZDAwMTBhYWZmZTUnKS52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVzcGFsZGVyYSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJzU4MDdhZjVmMzFmNTVkMDAxMGFhZmZlNCcpLnZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgICBwcml2YXRlIF9hdHRyU2NobTogQXR0cmlidXRlU2NobTtcbiAgICBwcml2YXRlIF9yZWZlcmVuY2U6IFJlY29yZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZTogUmVjb3JkLCBhdHRyU2NobTogQXR0cmlidXRlU2NobSwgYXR0cj8pIHtcbiAgICAgICAgdGhpcy5fYXR0clNjaG0gPSBhdHRyU2NobTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmVyZW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBpZiAoYXR0ciAmJiBhdHRyLmlkID09PSB0aGlzLl9hdHRyU2NobS5pZCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBhdHRyW3RoaXMuZGF0YVR5cGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdHRyU2NobSgpOiBBdHRyaWJ1dGVTY2htIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dHJTY2htO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXR0clNjaG0odmFsdWU6IEF0dHJpYnV0ZVNjaG0pIHtcbiAgICAgICAgdGhpcy5fYXR0clNjaG0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXR0clNjaG0uaW5wdXQuZGF0YVR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRyU2NobS5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHYpIHtcbiAgICAgICAgbGV0IHBjaGVjayA9IG5ldyBQYXJhbUNoZWNrZXIodiwgdGhpcy5kYXRhVHlwZSk7XG4gICAgICAgIGlmIChwY2hlY2suY2hlY2spIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcbiAgICAgICAgICAgICAgICBQYXJhbWV0ZXIgd3JvbmcgfCBFbCB2YWxvciAke3Z9IGFzaWduYWRvIGFsIGF0dHJpYnV0byAke3RoaXMubmFtZX0gXG4gICAgICAgICAgICAgICAgY29uIGVsIF9pZCAke3RoaXMuaWR9IG5vIGNvaW5jaWRlIGNvbiBlbCBkYXRhVHlwZSAke3RoaXMuZGF0YVR5cGV9XG4gICAgICAgICAgICBgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXR0clNjaG0uaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhKCkge1xuICAgICAgICB2YXIgZCA9IHt9O1xuICAgICAgICBkWydpZCddID0gdGhpcy5pZDtcbiAgICAgICAgZFt0aGlzLmRhdGFUeXBlXSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG59XG5cbiovIl19
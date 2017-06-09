import { ParamChecker } from '../Helpers';
import { AttributeSchm } from './schema';
import { Base } from './base';
import { Record } from './record';
import { Attribute } from './attribute';

export class RecordBuilder {
    public static make(raw: any) {
        const r = new Record();
        r.id = raw.id;
        r.setCreateISOString(raw.created);
        r.setUpdated(raw.updated);
        //r.attribute = RecordBuilder._setAttribute(raw.attribute);

    }

    //private static _setAttribute(raw: any[]): Attribute[]{

        //return raw.map(x=> new Attribute({}, x))
    //}
}



export class SchemaBuilder {

}











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
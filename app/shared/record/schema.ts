import { Updated } from './updated';
import { Base } from './base';
import { AttrBase } from './attrBase';


export class Schema extends Base {
    protected _type: string;
    protected _name: string;
    protected _attributes: any[];

    constructor(schm?: any) {
        super();
        this._setData(schm);
    }

    public get name(): string {
        return this.getAttr('name', 'string');
    }

    public get description(): string {
        return this.getAttr('description', 'string');
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }


    private _setData(schm: any) {
        if (schm) {
            this._id = schm._id;
            this._type = schm.type;
            this._name = schm.name;
            this._created = schm.created;
            this._updated = schm.updated;
            this._attributes = [];
            if (Array.isArray(schm.attributes)) {
                this._attributes = schm.attributes//.map(x => new AttrBase(x));
            }
        }
    }

    public getAttr(attrId: string, target?: string, key?: string) {
        if (!key) { key = 'id' };
        if (key === undefined && attrId === undefined) { return null; }

        var index = this._attributes.map(x => x[key]).indexOf(attrId);
        if (index === -1) { return null }

        if (target === undefined) { return this._attributes[index]; }

        return this._attributes[index][target];
    }

    public get data(): any {
        let data = {};
        if (this._id) {
            data['_id'] = this._id
        }
        data['type'] = this._type;
        data['name'] = this._name;
        data['created'] = this._created;
        data['updated'] = this._updated;

        if (this._attributes && this._attributes.length) {
            data['attributes'] = this._attributes.map(x => x.data);
        }

        return data;
    }
    public set data(record: any) {
        if (record) {
            this._id = record._id;
            this._type = record.type;
            this._name = record.name;
            this._created = record.created;
            this._updated = record.updated;
            this._attributes = [];
            if (record.attributes && record.attributes.length) {
                this._attributes = record.attributes.map(x => new AttrBase(x));
            }
        }
    }
    public get properties(): any {

        var keyObj = this.getAttr('keys', 'listOfObj');

        if (!keyObj || keyObj.legth === 0) { return {}; }

        var data = {};
        for (var index = 0; index < keyObj.length; index++) {
            let id = keyObj[index]['id'];
            let value = keyObj[index]['string'];

            data[id] = this.getAttr(id, value);
        }

        return data;
    }
    public get listAttrIds(): string[] {
        return this.getAttr('attributes', 'list');
    }
}

export class SchmSchemaObj {
    private _id: string;
    private _type: string;
    private _name: string;
    private _created: Date;
    private _updated: any;
    private _attributes: AttrBase[];

    constructor(schm?) {
        if (schm) {
            this._id = schm._id;
            this._type = schm.type;
            this._name = schm.name;
            this._created = new Date(schm.created);
            this._updated = schm.updated;
            this._attributes = [];
            if (schm.attributes && schm.attributes.length) {

                schm.attributes.forEach(x => {
                    this._attributes.push(new AttrBase(x));
                })
                //this._attributes=schm.attributes;
            }
        }
    }
    public get id() {
        return this._id;
    }
    public get type() {
        return this._type;
    }

    public get attributes(): AttrBase[] {
        return this._attributes;
    }

    public set attributes(value: AttrBase[]) {
        this._attributes = value;
    }

    public getAttr(attrId: string, dt: string) {
        return this.findValueByVarHelper("id", attrId, dt);
    }

    protected findValueByVarHelper(key, value, target?) {
        if (key === undefined && value === undefined) { return null; }

        var index = this._attributes.map(x => x[key]).indexOf(value);
        if (index === -1) { return null }

        if (target === undefined) { return this._attributes[index]; }

        return this._attributes[index][target];

    }

}

export class AttributeSchm extends Schema {
    private _input: InputSchm;
    public get inputRef(): string {
        return this.getAttr('input', 'reference');
    }

    public get input(): InputSchm {
        return this._input;
    }

    public set input(value: InputSchm) {
        this._input = value;
    }

    public get dataType(): string {
        return this.getAttr('dataType', 'string');
    }

}

export class InputSchm extends Schema {
    public get dataType(): string {
        return this.getAttr('dataType', 'string');
    }
}

export class SchemaBuilder {
    public id: string;
    private _schm: Schema;
    private _attrSchms: AttributeSchm[];
    private _inputs: InputSchm[];
    private _data: any;

    constructor(schema: any[]) {
        this._data = schema;
        this._setInputSchms(schema);
        this._setSchema(schema);

        // esta función requiere de que los _inputs esten seteados;
        this._setAttrSchms(schema);
        this.id = this.schm.id;

    }

    public get data(): any {
        return this._data;
    }

    public set data(value: any) {
        this._data = value;
    }


    public get schm(): Schema {
        return this._schm;
    }

    public set schm(value: Schema) {
        this._schm = value;
    }

    public get listAttrIds(): string[] {
        return this.schm.listAttrIds;
    }

    public get attrSchms(): AttributeSchm[] {
        return this._attrSchms;
    }

    public set attrSchms(value: AttributeSchm[]) {
        this._attrSchms = value;
    }

    private _setSchema(values: any[]) {
        let schema = values.filter(x => x.type === 'schema');
        if (schema.length) {
            this._schm = new Schema(schema[0]);

            //console.log(JSON.stringify(this._schema))
        }
    }

    private _setAttrSchms(values: any[]) {
        let attrConfs = values.filter(x => x.type === 'attribute');
        if (attrConfs.length) {
            this._attrSchms = attrConfs.map(x => {
                let a = new AttributeSchm(x);
                let index = this._inputs.map(i => i.id).indexOf(a.inputRef);
                if (index !== -1) {
                    a.input = this._inputs[index];
                } else {
                    console.log('El attributo no hizo match con un input. Cuidadooooo !!!!!!');
                }
                return a;

            });
        }
    }

    private _setInputSchms(values: any[]) {
        let attrConfs = values.filter(x => x.type === 'input');
        if (attrConfs.length) {
            this._inputs = attrConfs.map(x => new InputSchm(x));
        }
    }

}
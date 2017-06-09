import { ParamChecker } from '../Helpers/paramChecker';
import { Collection } from '../db_local/loki';
import { SchemaBuilder, RecordBuilder } from './builder';
import { AttributeSchm, Schema, InputSchm } from './schema';
import { Record } from './record';
import { Updated } from './updated';
import { AttrBase } from './attrBase';

export class Attribute extends AttrBase {
    private _schema: AttributeSchm;
    private _parent: Record;

    public static make() { }

    constructor(schema: AttributeSchm, raw?: any, parent?: Record) {
        super(raw);
        this.schema = schema;
        this.id = this.schema.id;
        if (parent) this.parent = parent;
    }

    public get parent() {
        return this._parent;
    }

    public set parent(reference: Record) {
        this._parent = reference;
    }

    public get schema(): AttributeSchm {
        return this._schema;
    }

    public set schema(value: AttributeSchm) {
        if (!value) return;

        this._schema = value;
        this.id = this._schema.id;
    }

    public get dataType() {
        return this._schema.input.dataType;
    }

    public get name(): string {
        return this._schema.name;
    }

    public get input(): InputSchm {
        return this._schema.input;
    }

    public get value(): any {
        return this[this.dataType];
    }

    public set value(v) {
        const pcheck = new ParamChecker(v, this.dataType);
        if (pcheck.check) {
            this[this.dataType] = v;
        } else {
            console.log(`
                Parameter wrong | El valor ${v} asignado al attributo ${this.name} 
                con el _id ${this.id} no coincide con el dataType ${this.dataType}
            `);
        }

    }


    public get data(): any {
        return {
            id: this.id,
            [this.dataType]: this.value
        };
    }

}
import { ParamChecker } from '../Helpers/paramChecker';
import { AttributeSchm, Schema } from './schema';
import { Base } from './base';
import { Attribute } from './attribute';
import { Updated } from './updated'

export class Record extends Base {
    private _schema: Schema;
    protected _attributes: Attribute[];

    constructor() {
        super();
    }

    public get schema(): Schema {
        return this._schema;
    }

    public set schema(value: Schema) {
        this._schema = value;
    }

    public get schm() {
        return this.schema.id;
    }

    public get attributes() {
        return this._attributes;
    }

    public set attributes(value: Attribute[]) {
        this._attributes = value;
    }

    public get reference() {
        return this;
    }

    public getData(userSign?: string): any {
        const data = {};
        if (this._id) data['_id'] = this._id;
        if (!this.created) this.created = new Date();
        if (userSign !== 'noSign') {
            this.update(new Updated({ user: userSign , date: new Date().toISOString() }));
        }

        data['schm'] = this.schm;
        data['created'] = this._created;
        data['updated'] = this._updated.map(x => x.data);

        if (Array.isArray(this._attributes)) {
            data['attributes'] = this._attributes.map(x => x.data);
        }

        return data;
    }

    public getAttribute(value: string): Attribute {

        let index = this._attributes.map(x => x.id).indexOf(value);
        if (index !== -1) return this._attributes[index];
    }

}
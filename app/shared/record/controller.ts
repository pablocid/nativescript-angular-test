import * as Q from 'q';
import { find as Find } from 'lodash';
import { Collection, Record, Schema, AttributeSchm, Attribute, InputSchm, Plant } from './';
import { LokiCollection } from '../db_local';
export class RecordController {
    private _dbSchm: Promise<LokiCollection>;
    private _dbPlants: Promise<LokiCollection>;

    constructor(collection?: string) {
        // if (
        //     collection &&
        //     collection === 'espaldera' ||
        //     collection === 'records' ||
        //     collection === 'plantas'
        // ) {

        // }
        this._dbPlants = Collection.getCollection('espaldera');
        this._dbSchm = Collection.getCollection('schema');
    }

    public getPlant(_id: string): Promise<Plant> {
        return this._dbPlants
            .then(db => {
                return db.findOne({ _id });
            })
            .then(x => {
                return this._getSchema(x.schm)
                    .then((z) => {
                        return { schema: z.schema, attrs: z.attrSchms, raw: x };
                    })
            })
            .then(x => this._setPlant(x.schema, x.attrs, x.raw));
    }

    private _setPlant(schema: Schema, attrSchms: AttributeSchm[], raw: any): Plant {
        let r = new Plant();
        if (!raw) return r;

        const keys = Object.keys(raw);
        if (
            keys.indexOf('_id') === -1 ||
            keys.indexOf('schm') === -1 ||
            keys.indexOf('created') === -1 ||
            keys.indexOf('updated') === -1 ||
            keys.indexOf('updated') === -1
        ) {
            console.log(' El raw object no tiene alguna de estas keys ["_id", "schm", "attributes", "updated", "created"]');
            return r;
        }

        r.id = raw._id;
        r.schema = schema;
        r.setCreateISOString(raw.created);
        r.setUpdated(raw.updated);
        r.attributes = attrSchms
            .map(a => new Attribute(a, Find(raw.attributes, { id: a.id }), r.reference));
        return r;

    }

    private _getSchema(_id: string) {
        return this._dbSchm
            .then(db => {
                const schema = new Schema(db.findOne({ _id }));
                const listAttr: string[] = schema.getAttr('attributes', 'list');
                if (!listAttr || !Array.isArray(listAttr) || !listAttr.length) return { schema, attrSchms: [] };

                let attrSchms: AttributeSchm[] = listAttr.map(x => db.findOne({ _id: x }))
                    .filter(x => x.type === 'attribute')
                    .map(x => new AttributeSchm(x))
                    .map(x => {
                        const i = x.getAttr('input', 'reference');
                        x.input = new InputSchm(db.findOne({ _id: i }));
                        return x;
                    });

                return { schema, attrSchms };
            });
    }

    private _getSchm(_id: string, db, raw: any): { schema: Schema, attrSchms: AttributeSchm[], raw: any } {
        const schema = new Schema(db.findOne({ _id }));
        const listAttr: string[] = schema.getAttr('attributes', 'list');
        if (!listAttr || !Array.isArray(listAttr) || !listAttr.length) return { schema, attrSchms: [], raw };

        let attrSchms: AttributeSchm[] = listAttr.map(x => db.findOne({ _id: x }))
            .filter(x => x.type === 'attribute')
            .map(x => new AttributeSchm(x))
            .map(x => {
                const i = x.getAttr('input', 'reference');
                x.input = new InputSchm(db.findOne({ _id: i }));
                return x;
            });

        return { schema, attrSchms, raw };
    }

    public getRow(espaldera: number, hilera: number): Promise<Plant[]> {
        return this._dbPlants
            .then(db => {
                return this._dbSchm.then(x => {
                    return { dbPlants: db, dbSchm: x };
                })
            })
            .then(dbs => {
                return {
                    plants: dbs.dbPlants.find({ schm: '57a4e02ec830e2bdff1a1608' })
                        .filter(x =>
                            x.attributes.some(x => x.id === '5807af5f31f55d0010aaffe4' && x.number === espaldera) &&
                            x.attributes.some(x => x.id === '5807af9231f55d0010aaffe5' && x.number === hilera)
                        ), dbSchm: dbs.dbSchm
                }
            })
            .then(dbs => dbs.plants.map(x => this._getSchm(x.schm, dbs.dbSchm, x)))
            .then(p => p.map(x => this._setPlant(x.schema, x.attrSchms, x.raw)));
    }

}

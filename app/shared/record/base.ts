import { Updated } from './updated';
import { ParamChecker } from '../Helpers';


export class Base {
    protected _id: string;
    protected _created: string;
    protected _updated: Updated[] = [];


    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get created(): Date {
        if (this._created) return new Date(this._created);
    }

    public set created(value: Date) {
        this._created = value.toISOString();
    }

    public setCreateISOString(raw: string) {
        this._created = raw;
    }

    public setUpdated(raw: any[]) {
        if (raw && Array.isArray(raw) && raw.length) {
            raw.forEach(x => {
                if (!x.id || !x.date) return;
                this.update(new Updated(x));
            });
        }
    }

    public update(value: Updated) {
        if (this._updated) {
            this._updated.push(value);
        } else {
            this._updated = [];
            this._updated.push(value);
        }
    }

}
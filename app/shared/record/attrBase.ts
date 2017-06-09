
export class AttrBase {
    private _id: string;
    private _string: string;
    private _boolean: boolean;
    private _date: string;
    private _number: number;
    private _reference: string;
    private _listOfObj: any[];
    private _list: string[];

    constructor(attr?: any) {
        this._set(attr);

    }

    private _set(attr?: any) {
        if (!attr) return;
        //this._id = attr.id;
        this._string = attr.string || undefined;
        this._boolean = attr.boolean !== undefined ? attr.boolean : undefined;
        this._date = attr.date || undefined;
        this._number = attr.number || undefined;
        this._reference = attr.reference || undefined;
        this._listOfObj = attr.listOfObj || undefined;
        this._list = attr.list && Array.isArray(attr.list) ? attr.list : undefined;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get string(): string {
        return this._string;
    }
    public set string(value: string) {
        this._string = value;
    }

    public get boolean(): boolean {
        return this._boolean;
    }
    public set boolean(value: boolean) {
        this._boolean = value;
    }

    public get date(): Date {
        return new Date(this._date);
    }
    public set date(value: Date) {
        this._date = new Date(this._date).toISOString();
    }

    public get number(): number {
        return this._number;
    }
    public set number(value: number) {
        this._number = value;
    }

    public get reference(): string {
        return this._reference;
    }
    public set reference(value: string) {
        this._reference = value;
    }

    public get listOfObj(): any[] {
        return this._listOfObj
    }
    public set listOfObj(value: any[]) {
        this._listOfObj = value;
    }

    public get list(): string[] {
        return this._list;
    }
    public set list(value: string[]) {
        this._list = value;
    }

    public get data() {
        let data = {};
        data['id'] = this._id;

        if (this._string) { data['string'] = this._string; }
        if (this._boolean !== undefined) { data['boolean'] = this._boolean; }
        if (this._date) { data['date'] = this._date; }
        if (this._number !== undefined) { data['number'] = this._number; }
        if (this._reference) { data['reference'] = this._reference; }
        if (this._listOfObj) { data['listOfObj'] = this._listOfObj; }
        if (this._list) { data['list'] = this._list; }

        return data;
    }
}
export class Updated {
    private _user: string;
    private _date: Date;

    constructor(update?: { user: string, date: string }) {
        if (update.user) { this._user = update.user; }
        if (update.date) { this._date = new Date(update.date); }
    }

    public get user(): string {
        return this._user;
    }

    public set user(value: string) {
        this._user = value;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get data() {
        return {
            user: this._user,
            date: this._date
        }
    }
}
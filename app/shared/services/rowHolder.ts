import { Injectable } from '@angular/core';
import { Plant } from '../record';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class RowHolder {
    public row: BehaviorSubject<Plant[]>;
    public tabIndex: BehaviorSubject<number>;
    constructor() {
        this.row = new BehaviorSubject([]);
        this.tabIndex = new BehaviorSubject(1);
    }


}
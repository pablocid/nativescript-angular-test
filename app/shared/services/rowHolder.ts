import { Injectable } from '@angular/core';
import { Plant } from '../record';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class RowHolder {
    public row: BehaviorSubject<Plant[]>;
    constructor() {
        this.row = new BehaviorSubject([]);
    }
    
}
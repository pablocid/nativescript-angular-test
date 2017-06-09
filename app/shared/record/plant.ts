import { Record } from './';

export class Plant extends Record {
    private _record: Record;

    public set record(value: Record) {
        this._record = value;
    }

    public get record(): Record {
        return this._record;
    }
    public get spot(): string {
        //console.log('Plant - getUbicación');
        let espaldera = this.getAttribute('5807af5f31f55d0010aaffe4').value;
        let hilera = this.getAttribute('5807af9231f55d0010aaffe5').value;
        let posicion = this.getAttribute('5807afe331f55d0010aaffe6').value || '-';
        if (espaldera && hilera) {
            return `E${espaldera} H${hilera} P${posicion}`;
        }

        return 'ubicación ***';
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

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { setString, getString } from "application-settings";

import { User } from "./user";
//import { Config } from "../config";

@Injectable()
export class UserService {
    private _authUrl: string;

    constructor(private http: Http) {
        this._authUrl = "https://pmg-restful-dev.herokuapp.com/auth/local";
    }

    public register(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        //headers.append('Cache-Control', 'no-cache');

        return this.http.post(this._authUrl, JSON.stringify(user), { headers })
            .map(x => x.json())
            .catch(this.handleErrors);
    }

    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(this._authUrl, JSON.stringify(user), { headers })
            .map(x => x.json())
            .map(x => {
                setString('token', x.token)
                return x;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
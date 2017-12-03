import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(public http:Http) { }

  getApplication() {
    return this.http.get(`assets/data.json`).map(res=>res.json());
  }

}
import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applications: Array<any>=[];
  p: number = 1;
  filter: string = "";
  filtervalue: string = "";
  init: boolean = false;
  constructor(public http:Http, public appService:AppService) { 
  }

  getApplication(filter) {
    this.filter = filter;
    this.init = true;
    this.appService.getApplication().subscribe(
      (data)=> {
        this.applications = data.filter(app => app.name.toLowerCase().includes(this.filter.toLowerCase()));
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice';
import { ApplicationService } from './../applicationservice';

@Component({
  selector: 'app-serviceexample',
  templateUrl: './serviceexample.component.html',
  styleUrls: ['./serviceexample.component.css'],
  providers:[MyService]
})
export class ServiceexampleComponent implements OnInit {

  constructor( private _myService:MyService, private _applicationService:ApplicationService ) { }

  getApplicationName:string = "";
  userName:any;
  empInfo:any;
  employees:any = [];

  ngOnInit() {
   this.getApplicationName =  this._myService.applicationName;     

   this.userName = this._myService.getUserName();
   this.empInfo = this._applicationService.empInfo;
   this.employees = this._applicationService.getEmployeeDetails();

  }

}

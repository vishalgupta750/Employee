import { Component, OnInit } from '@angular/core';
import{Employee} from '../employee'
import {EMPLOYEES} from '../employee_list';



@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  employee=EMPLOYEES;
  constructor() { }

  ngOnInit() {
  }

}

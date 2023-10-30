import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './service/employee';
import { EmployeeService } from './service/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtService } from './service/jwt.service';
import { AuthService } from './service/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
 
  constructor(private router: Router,private employeeService: EmployeeService,private authservice: AuthService, private service: JwtService) {}
  title = 'jwt-angular';

  
 
}

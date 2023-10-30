import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/service/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;

  message: string;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private service: JwtService
  ) { }

  ngOnInit() {
    this.hello();
  }

  hello() {
    this.service.hello().subscribe(
      (response: any) => {
        console.log(response);
        this.message = response.data.msg;
      },
      (error) => {
        // Handle errors here
        this.router.navigate(['/accessDenied']);
        console.error('Error.............:', error.error.errorMsg);
      }
    )
  }

  public employee(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
        this.router.navigate(['/employee']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  
}

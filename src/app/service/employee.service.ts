import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../components/environments/environment';
import { JwtService } from './jwt.service';


@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient,
    private jwtService: JwtService){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`,{
      headers: this.jwtService.createAuhtorizationHeader()
    });
  }

  


  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee,{
      headers: this.jwtService.createAuhtorizationHeader()
    });
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee,{
      headers: this.jwtService.createAuhtorizationHeader()
    });
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`,{
      headers: this.jwtService.createAuhtorizationHeader()
    });
  }
}
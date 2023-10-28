import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  message: string;

  constructor(
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
}

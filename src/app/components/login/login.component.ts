import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  message: string;
  loading = false;
  msgShowing=true;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }



  submitForm() {
    this.msgShowing=false;
    this.loading = true;
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwt != null) {
          const jwtToken = response.jwt;
          localStorage.setItem('jwt', jwtToken);
          this.router.navigateByUrl("/dashboard");
          this.loading = false;
        }
        else{
          this.router.navigate(['/login']);
          this.loading = false;
        }
      },
      (err) => {
        // Handle errors here
        this.message =err.error.errorMsg;
        this.loading = false;
        this.msgShowing=true;
        console.error('Error.............:', err.error.errorMsg);
      }
    )
  }

}

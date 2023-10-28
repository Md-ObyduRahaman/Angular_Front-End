import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-denied-exception',
  templateUrl: './access-denied-exception.component.html',
  styleUrls: ['./access-denied-exception.component.scss']
})
export class AccessDeniedExceptionComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']); // Replace '/' with the actual route for your home page
  }
}

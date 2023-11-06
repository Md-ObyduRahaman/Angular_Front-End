import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const BASE_URL = ["http://localhost:8090/"]
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // You can initialize the authentication state here, e.g., based on cookies or local storage.
    // For simplicity, we'll start with the user not authenticated.
  }

  // Observable that emits the authentication state (true if the user is authenticated, false otherwise).
  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Method to check if the user is currently logged in.
  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  authenticate(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest);

  }

  login(loginRequest: any): Observable<any> {
    // Replace this with your actual authentication service or API call
    this.authenticate(loginRequest).subscribe(
      (response) => {
        // Check if the response contains a JWT token
        if (response && response.jwt) {
          // Store the JWT token in localStorage
          localStorage.setItem('jwt', response.jwt);
          this.isAuthenticatedSubject.next(true);

          
          
        } else {
            alert("lll");
           
          // Handle authentication failure (e.g., show an error message)
          // You might want to use a different Subject to emit an error message here.
        }
      },
      (error) => {
        alert("Please Check your Back-END Code, Some thing went to wrong."+error.message)
        // Handle HTTP request error (e.g., network issue)
        // You might want to use a different Subject to emit an error message here.
      }
    );
    return this.authenticate(loginRequest);
  }

  // Simulate a logout operation (you can replace this with actual logout logic).
  logout(): void {
    // Perform logout logic here, e.g., clear user session, token, or perform server logout.
    // For simplicity, we'll just set the isAuthenticatedSubject to false here.
   
    localStorage.removeItem('jwt');
    this.isAuthenticatedSubject.next(false);
  }
}

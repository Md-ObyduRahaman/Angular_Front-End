import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccessDeniedExceptionComponent } from './components/access-denied-exception/access-denied-exception.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './service/employee.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './service/AuthService';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AccessDeniedExceptionComponent,
    LoadingComponent,
    EmployeeComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

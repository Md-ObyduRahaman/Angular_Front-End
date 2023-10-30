import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccessDeniedExceptionComponent } from './components/access-denied-exception/access-denied-exception.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AuthGuard } from './service/auth.guard';



const routes: Routes = [
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "accessDenied", component: AccessDeniedExceptionComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "employee", component: EmployeeComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

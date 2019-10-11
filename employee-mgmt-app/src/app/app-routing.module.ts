import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'employees',component: EmployeesComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'employees/new',component: AddEmployeeComponent},
  {path: 'employees/:id',component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit,OnDestroy{
  employeeList: any[];
  constructor(private employeeService: EmployeeService) { }
  employeesSubscription: Subscription;
  ngOnInit() {
    this.employeesSubscription = this.employeeService.getEmployee()
      .subscribe((res: any[])=>{
        console.log(res);
        this.employeeList = res;
  });
  }

  ngOnDestroy() {
    console.log("inside onDestroy()");
    this.employeesSubscription.unsubscribe();
  }

}

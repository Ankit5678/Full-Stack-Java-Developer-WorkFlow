import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit,OnDestroy {

  employeeData: any;
  id: string;
  employeeSubscription: Subscription;
  duplicateEmployeeData: any;
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeSubscription = this.employeeService.getEmployeeById(this.id)
    .subscribe((res:any) => {
      console.log(res);
      this.employeeData = res;
    });
  }

  onEditHandler(){
    console.log(this.employeeData);
    this.duplicateEmployeeData = JSON.parse(JSON.stringify(this.employeeData));
  }

  async onUpdateHandler(formData){
    console.log(formData);
    console.log(formData.value);
    let res = await this.employeeService.updateEmployee(this.duplicateEmployeeData);
    console.log(res);
  }

  ngOnDestroy() {
    console.log("inside onDestroy()");
    this.employeeSubscription.unsubscribe();
  }

}

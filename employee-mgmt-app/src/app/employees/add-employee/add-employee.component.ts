import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: []
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  isSave: boolean;

  constructor( private employeeService:EmployeeService ) {
    this.employeeForm = new FormGroup({
      name: new FormControl('',Validators.required),
      age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
      department: new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
  }

  async onAddEmployeeHandler(){
    console.log(this.employeeForm.value);
    let res = await this.employeeService.createEmployee(this.employeeForm.value);
    console.log(res);

    if(res){
      this.isSave = true;
    }
  }
}

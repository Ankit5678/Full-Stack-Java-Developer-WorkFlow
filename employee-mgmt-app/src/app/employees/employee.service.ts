import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private REST_API_URL: string = "http://localhost:80/employee-mgmt-app-06/employees";

  constructor(private http:HttpClient) { }

  createEmployee(employeeData:any){//1. Get data from component
    console.log(employeeData);
    //2. send above data to rest api
    let promise = new Promise((resolve,reject) =>{
      this.http.post(this.REST_API_URL,employeeData)
      .toPromise()
      .then((res)=>{
        console.log(res)
        resolve(res);
      })
      .catch((err)=>{
        console.log(err)
        reject(err);
      })
      .finally(()=>{
        console.log("end")
      });
    });
    return promise;
  }

  updateEmployee(employeeData:any){
    let promise = new Promise((resolve,reject) =>{
      this.http.put(this.REST_API_URL+'/'+employeeData.id,employeeData)
      .toPromise()
      .then((res)=>{
        console.log(res)
        resolve(res);
      })
      .catch((err)=>{
        console.log(err)
        reject(err);
      })
      .finally(()=>{
        console.log("end")
      });
    });
    return promise;
  }

  getEmployee(){
    return this.http.get(this.REST_API_URL)
    .pipe( map(res =>{
      console.log(res);
      return res;
    }));
  }

  getEmployeeById(id){
    return this.http.get(this.REST_API_URL+'/'+id)
    .pipe( map (res =>{
      console.log(res);
      return res;
    }))
  }
}

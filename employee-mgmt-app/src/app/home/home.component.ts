import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .redText{
      color:red;
    }
    .greenText{
      color:green;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  appname: String = "employee management app"
  age: number = 20
  skillList: string[] = ['html', 'css']
  isLoggedIn: boolean = true;
  devName: string = "Ankit";
  isAuth: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  getAge() {
    return this.age;
  }

  btnClickHandler(evt) {
    console.log(evt);
    alert("clicked");
  }
}

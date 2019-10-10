import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="container text-center">
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-nav>
      <p>Developed by Ankit</p>
      <p>Copyright &copy;2019</p>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

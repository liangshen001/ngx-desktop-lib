import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a;
  title = 'ngx-desktop-lib';
  aa() {
    debugger;
    console.log(this.a);
  }
}

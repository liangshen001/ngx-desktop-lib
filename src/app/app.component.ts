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
    console.log(this.a);
  }
}

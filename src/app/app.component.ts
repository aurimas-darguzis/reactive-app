import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Reactive Application!';
  links = {
    items: ['/items'],
    widgets: ['/widgets'],
    users: ['/users'],
    home: ['/home']
  };
}

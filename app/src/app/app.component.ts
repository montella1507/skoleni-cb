import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state = 'expanded';
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home-outline'
    },
    {
      title: 'Heroes',
      link: '/heroes',
      icon: 'people-outline'
    },
    {
      title: 'Abilities',
      link: '/abilities',
      icon: 'sun-outline'
    }
  ];

}

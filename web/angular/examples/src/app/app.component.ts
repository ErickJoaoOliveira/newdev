import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName: string = 'Erick';
  bio: string = 'lorem ipsun dummy';
  links: string[] = ['https://getbootstrap.com/docs/5.0/utilities/api/','https://angular.io/start - Novo ']
  subtitle: string = 'subtitulo'
}

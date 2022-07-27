import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css']
})
export class CardExampleComponent implements OnInit {
  fullName: string = 'Erick';
  @Input() name: string = '';
  @Input() links: string[] = [''];
  @Input() bio: string = '';
  @Input() subtitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

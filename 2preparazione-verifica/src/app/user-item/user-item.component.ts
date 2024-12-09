import {
  Component,
  OnInit,
  Input // <--- aggiungi questo
 } from '@angular/core';


@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() name: string=""; 

  constructor() {
     
  }

  ngOnInit() {}
}




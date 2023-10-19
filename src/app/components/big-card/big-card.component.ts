import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
<<<<<<< HEAD
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  cardlink:string = ""
  @Input()
  id:string = "0"
=======
>>>>>>> parent of 510d8f4 (feat: menu bar and card components)

  constructor() { }

  ngOnInit(): void {
  }

}

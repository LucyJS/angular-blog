import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
<<<<<<< HEAD
  @Input()
  photoCover:string = ""
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

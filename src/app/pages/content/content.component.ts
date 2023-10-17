import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentPhotoCover:string = "https://picsum.photos/200/300"
  contentTitle:string = ""
  contentDescription:String = ""
  contentLink?:string = "" 
  private id:string | null = "0";

  constructor(
     private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)["0"]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentPhotoCover = result.photoCover
    this.contentLink = result.cardlink
   
    if(!result){
      this.contentTitle = "404"
      this.contentDescription = "artigo não encontrado"
      this.contentLink = ""
    }
  }
}

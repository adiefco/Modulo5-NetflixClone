import { Component, Input, OnInit } from '@angular/core';

interface ContentInterface{
  title: string;
  history?: string;
  image: string;
  image2?: string;
  width: string;
  width2?:string;
  ordem?: string;
}


@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @Input() list: ContentInterface={title:"", image:"", width:""};
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
  }

}

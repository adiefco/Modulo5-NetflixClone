import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame4',
  templateUrl: './frame4.component.html',
  styleUrls: ['./frame4.component.scss']
})
export class Frame4Component implements OnInit {



  constructor(private router: Router) { }



  ngOnInit(): void {
  }

  goToContent() {
    this.router.navigate(['/conteudo']);
  }

}

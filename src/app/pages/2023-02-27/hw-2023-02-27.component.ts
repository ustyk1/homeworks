import { Component, Input, OnInit } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';

interface ILinkItem { 
  path: string;
}

@Component({
  selector: 'app-hw-2023-02-27',
  templateUrl: './hw-2023-02-27.component.html',
  styleUrls: ['./hw-2023-02-27.component.scss']
})
export class Hw_2023_02_27_Component implements OnInit {
  public task: string = 'Вивести рейтинг мов програмування по типу картинки вгорі. Звернути увагу на кольори мов, які не мають 1-го процента.'

  public routerLink: ILinkItem = {
    path: "/graph"
  }
 
  constructor() { }

  ngOnInit(): void {
    
  }
  
}

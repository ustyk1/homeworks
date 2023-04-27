import { Component, OnInit } from '@angular/core';

interface ILinkItem { 
  path: string;
}

@Component({
  selector: 'app-hw-2023-02-28',
  templateUrl: './hw-2023-02-28.component.html',
  styleUrls: ['./hw-2023-02-28.component.scss']
})
export class Hw_2023_02_28_Component implements OnInit {
  
  public routerLink: ILinkItem = {
    path: "/user-card"
  }
  
  constructor() {}

  ngOnInit() {}
}

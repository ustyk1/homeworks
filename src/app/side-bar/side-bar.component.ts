import { Component, OnInit } from '@angular/core';

export interface ILinkItem { 
  path: string;
  text: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  title: string = 'Homeworks';
  
  linkItems: ILinkItem[] = [
    {
      path: 'hw-2023-02-27',
      text: 'hw-2023-02-27'
    },
    {
      path: 'hw-2023-02-28',
      text: 'hw-2023-02-28'
    },
    {
      path: 'hw-2023-04-20',
      text: 'hw-2023-04-20'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByMethod(index:number, el:any): number {
    return el.text;
  }


}

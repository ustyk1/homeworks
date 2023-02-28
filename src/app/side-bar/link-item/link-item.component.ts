import { Component, Input, OnInit } from '@angular/core';
import { ILinkItem } from '../side-bar.component';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {
  @Input() linkItem: ILinkItem | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

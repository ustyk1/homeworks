import { Component, Input, OnInit } from '@angular/core';

import {GRAPH_ITEM_DATA} from '../constants/common'


export interface IGraphItem { 
  id: number;
  language: string;
  popularity: number
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  graphItems: IGraphItem[] = GRAPH_ITEM_DATA;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.graphItems);
    
  }
  
}

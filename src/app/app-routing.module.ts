import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from './pages/2023-02-27/graph/graph.component';
import { Hw_2023_02_27_Component } from './pages/2023-02-27/hw-2023-02-27.component';
import { Hw_2023_02_28_Component } from './pages/hw-2023-02-28/hw-2023-02-28.component';
import { UserCardComponent } from './pages/hw-2023-02-28/user-card/user-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'hw-2023-02-27', pathMatch: 'full' },
  { path: 'hw-2023-02-27', component: Hw_2023_02_27_Component,
    children: [
      { path: '', redirectTo: 'graph', pathMatch: 'full' },
      { path: 'graph',  component: GraphComponent },
    ]
  },
  { path: 'hw-2023-02-28', component: Hw_2023_02_28_Component,
    children: [
      { path: '', redirectTo: 'user-card', pathMatch: 'full' },
      { path: 'user-card',  component: UserCardComponent },
    ] }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from './pages/2023-02-27/graph/graph.component';
import { Hw20230227Component } from './pages/2023-02-27/hw-2023-02-27.component';
import { Hw20230228Component } from './pages/hw-2023-02-28/hw-2023-02-28.component';

const routes: Routes = [
  { path: '', redirectTo: 'hw-2023-02-27', pathMatch: 'full' },
  { path: 'hw-2023-02-27', component: Hw20230227Component,
    children: [
      { path: '', redirectTo: 'graph', pathMatch: 'full' },
      { path: 'graph',  component: GraphComponent },
    ]
  },
  { path: 'hw-2023-02-28', component: Hw20230228Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

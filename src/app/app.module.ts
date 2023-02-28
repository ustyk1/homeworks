import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { GraphComponent } from './pages/2023-02-27/graph/graph.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LinkItemComponent } from './side-bar/link-item/link-item.component';
import { Hw20230228Component } from './pages/hw-2023-02-28/hw-2023-02-28.component';
import { Hw20230227Component } from './pages/2023-02-27/hw-2023-02-27.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    SideBarComponent,
    LinkItemComponent,
    Hw20230228Component,
    Hw20230227Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UserCardComponent } from './pages/hw-2023-02-28/user-card/user-card.component';
import { Hw_2023_02_28_Component } from './pages/hw-2023-02-28/hw-2023-02-28.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GraphComponent } from './pages/2023-02-27/graph/graph.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LinkItemComponent } from './side-bar/link-item/link-item.component';
import { Hw_2023_02_27_Component } from './pages/2023-02-27/hw-2023-02-27.component';
import { CommonModule } from '@angular/common';
// import { Hw_2023_02_28_Module } from './pages/hw-2023-02-28/hw-2023-02-28.module';

@NgModule({
  declarations: [
    UserCardComponent,
    AppComponent,
    GraphComponent,
    SideBarComponent,
    LinkItemComponent,
    Hw_2023_02_27_Component,
    Hw_2023_02_28_Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    // Hw_2023_02_28_Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

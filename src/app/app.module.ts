import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, ButtonsModule, LayoutModule, MenuModule ],
  declarations: [ AppComponent, MenuComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitPageComponent } from './fruit-page/fruit-page.component';
import { VegePageComponent } from './vege-page/vege-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FruitPageComponent,
    VegePageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

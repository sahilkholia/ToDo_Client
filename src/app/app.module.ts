import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddToDoListComponent } from './add-to-do-list/add-to-do-list.component';
import { RecentComponent } from './recent/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoListComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

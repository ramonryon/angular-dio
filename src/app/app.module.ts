import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AulasListComponent } from './aulas/aulas-list.component';
import { StarComponent } from './star/star-component';

@NgModule({
  declarations: [
    AppComponent,
    AulasListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

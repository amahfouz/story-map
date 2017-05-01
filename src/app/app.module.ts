import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './model/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './model/category.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ CategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

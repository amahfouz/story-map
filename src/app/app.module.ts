import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './model/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CategoryComponent } from './category/category.component';
import { CategoryHttpService } from './model/category-http.service';
import { CategoryService } from './model/category.service';
import { EpicService } from './model/epic.service';
import { EpicHttpService } from './model/epic-http.service';
import { TopLaneComponent } from './top-lane/top-lane.component';
import { EpicComponent } from './epic/epic.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CategoryComponent,
    TopLaneComponent,
    EpicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    CategoryHttpService,
    CategoryService,
    EpicHttpService,
    EpicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

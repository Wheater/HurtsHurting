import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';

import { AppComponent } from './app.component';
import { WodComponent } from './wod/wod.component';
import { AboutComponent } from './about/about.component';
import { WodScraperService } from './services/wod-scraper.service';
import { WodManagementComponent } from './wod-management/wod-management.component';
import { UserService } from './services/user.service';
import { DroppableDirective } from './drag-and-drop/droppable.directive';

@NgModule({
  declarations: [
    AppComponent,
    WodComponent,
    AboutComponent,
    WodManagementComponent,
    DroppableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(), 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    WodScraperService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }

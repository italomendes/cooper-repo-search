import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingTopbarComponent } from './components/loading-topbar/loading-topbar/loading-topbar.component';
import { LoadingTopbarService } from './services/loading-topbar/loading-topbar.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingTopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(appReducers),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoadingTopbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

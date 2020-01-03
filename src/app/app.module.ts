import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { IssuesComponent } from './components/issues/issues.component';
import { PullRComponent } from './components/pull-r/pull-r.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    IssuesComponent,
    PullRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

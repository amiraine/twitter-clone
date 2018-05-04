import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TrendingComponent } from './trending/trending.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    TrendingComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
